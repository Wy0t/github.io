import React from 'react';
import '.././css/Github_Page.css';
import GitHubLogin from 'react-github-login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const onSuccess = response => {
  console.log(response);
};

const onFailure = response => {
  console.error(response);
};

const GitHubOAuthButton = () => (
  <GitHubLogin
    clientId="2b693e69134c6cfeb8e4"
    onSuccess={onSuccess}
    onFailure={onFailure}
    buttonText="Login with GitHub"
  />
);

function Github_Page() {
    return (
        <> 
          <Navbar />
          <div className='Github'>
          <GitHubOAuthButton></GitHubOAuthButton>
          </div>
          <Footer /> 
        </>
    );
  }

export default Github_Page;