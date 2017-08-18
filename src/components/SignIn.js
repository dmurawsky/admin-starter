import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { auth } from 'firebase';

export default class SignIn extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._onChange = this._onChange.bind(this);
    this._signIn = this._signIn.bind(this);
    this.state = { email: '', password: '', error: '' };
  }

  _onChange(e){
    let update = {};
    update[e.target.name] = e.target.value;
    this.setState(() => {return update;});
  }

  _signIn(e) {
    e.preventDefault();
    auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(e => {
      this.setState(() => {return { error: e.message };});
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={4}/>
          <Col sm={4}>
            <form onSubmit={this._signIn}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" className="form-control" value={this.state.email} onChange={this._onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" className="form-control" value={this.state.password} onChange={this._onChange} />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
