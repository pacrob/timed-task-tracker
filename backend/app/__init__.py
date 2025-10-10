from flask import Flask
from .db import Session

def create_app():
    app = Flask(__name__)

    # --- your old app.py setup goes here ---
    # e.g. app.config["SECRET_KEY"] = "dev"
    # define routes you had before:
    @app.get("/")
    def index():
        return {"ok": True, "message": "task tracker backend is running"}
    @app.get("/health")
    def health():
        return {"ok": True}

    @app.get("/tasks")
    def create_task():
        return {"ok": True, "message": "create task endpoint"}
    
    # ------------------------------------------------
    # ensure SQLAlchemy sessions don't leak between requests
    @app.teardown_appcontext
    def remove_session(exc=None):
        Session.remove()

    return app

