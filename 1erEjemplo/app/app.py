import os
import psycopg2
from flask import Flask, jsonify

app = Flask(__name__)

def get_conn():
    return psycopg2.connect(
        host=os.getenv("DB_HOST", "localhost"),
        database=os.getenv("DB_NAME", "midb"),
        user=os.getenv("DB_USER","postgres"),
        password=os.getenv("DB_PASSWORD","Patito+123456")
    )

@app.route("/")
def index():
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT version();")
    version = cur.fetchone()[0]
    cur.close()
    conn.close()
    return jsonify({"db_version": version})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)