from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os


app = Flask(__name__)

# 解决 Vue localhost:5173 跨域
CORS(app)


UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)


@app.route("/api/mra/run", methods=["POST"])
def run_mra():

    filepath = None

    try:

        # 获取上传文件
        file = request.files["file"]


        filepath = os.path.join(
            UPLOAD_FOLDER,
            file.filename
        )


        # 保存文件
        file.save(filepath)


        # 读取 Excel
        df = pd.read_excel(filepath)

        print(df.columns.tolist())
        # 转 JSON
        data = df.to_dict(
            orient="records"
        )


        columns = df.columns.tolist()


        return jsonify({

            "success": True,

            "rows": len(data),

            "columns": columns,

            "data": data

        })


    except Exception as e:

        return jsonify({

            "success": False,

            "message": str(e)

        }),500


    finally:

        # 删除临时上传文件
        if filepath and os.path.exists(filepath):

            os.remove(filepath)

            print(
                f"Deleted temporary file: {filepath}"
            )



if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )