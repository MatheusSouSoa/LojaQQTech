from flask import Flask, send_file, request
import pandas as pd
import openpyxl

app = Flask(__name__)

@app.route('/')
def index():
    return send_file('index.html')

@app.route("/gerar_relatorio", methods=['POST'])
def gerar_relatorio():
    dados = request.json["relatorio"]
    dados = pd.read_json(dados)
    path = "/excel/relatorio.xlsx"
    dados.to_excel(path, index=False)
    return send_file(path, as_attachment=True)

if __name__ == "__main__":
    app.run()
