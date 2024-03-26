import React from 'react';
import GitHubLogin from 'react-github-login';

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

export default GitHubOAuthButton;