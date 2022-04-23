from flask import Flask,redirect, render_template, request, url_for,session
import ast
data=[]
emails = []
app = Flask(__name__)
app.secret_key = "256"
@app.route('/')
def home():
        return render_template("login.html")
@app.route('/login',methods=['POST','GET'])
def login():
    if request.method == "POST":
        d =  request.form.to_dict()
        session["user"] = request.form["username"]
        if d["username"] == 'admin' and d["password"] == "admin":
            return render_template('userlist.html',data=data,emails=emails)
        elif d not in data :
            return redirect(url_for('sign')) 
        else:
            return render_template('play.html')
@app.route('/sign')
def sign():
    return render_template("signup.html")          
@app.route('/signup',methods=['POST','GET'])
def signup():
    if request.method == "POST":
        d = request.form['username']
        p = request.form["password"]
        emails.append(request.form["mail"])
        if request.form["password"] == request.form['conform_password']:
            data.append({"username":d,"password":p})
            return redirect('/')
        else:
            return f"fk you wrong pass"
@app.route('/del/<e>')
def deluser(e):
    data.remove(str(e))
    return render_template("userlist.html",data=data,emails=emails,v=e)
@app.route('/logout')
def logout():
    if "user" in session:
        session.pop("user",None)
        return redirect("/")
if __name__=="__main__":
    app.run(debug=True)
    