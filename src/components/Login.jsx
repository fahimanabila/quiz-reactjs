import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/login', { email, password });
      navigate('/dashboard', { replace: true });
    } catch (error) {
      setError('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <section className="hero is-fullwidth is-fullheight is-success has-background-success">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={handleLogin} className="box">
                {error && (
                  <div className="notification is-danger">
                    {error}
                  </div>
                )}
                <div className="field mt-5">
                  <p className="is-size-3 has-text-centered has-text-weight-bold has-text-white">Quiz App</p>
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Insert email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5 mb-5">
                  <button className="button is-success is-fullwidth">Login</button>
                  <Link to={`/register`} className="button is-warning is-fullwidth mt-2">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;