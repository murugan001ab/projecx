from flask import Flask ,render_template
app=Flask('__name__')
@app.route('/')
@app.route('/login.html')
def login():
    return render_template('login/login.html')
@app.route('/newuser.html')
def newuser():
    return render_template('login/newuser.html')
@app.route('/forget.html')
def forget():
    return render_template('login/forget.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

if __name__=='__main__':
    app.run(debug=True)