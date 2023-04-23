<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Project README</title>
  <style>
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: bold;
        color: #333;
    }
    p {
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1.5;
        color: #666;
    }
    code {
        font-family: monospace;
        background-color: #eee;
        padding: 0.1rem 0.3rem;
        border-radius: 3px;
    }
    ul {
        margin-top: 0;
        margin-bottom: 1rem;
        padding-left: 2rem;
    }
    li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
        color: #666;
    }
    pre {
        font-family: monospace;
        background-color: #eee;
        padding: 1rem;
        border-radius: 3px;
        overflow-x: scroll;
    }
    code {
        display: block;
        white-space: pre-wrap;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <h1>React Project README</h1>
  <p>This is a React project that utilizes Vite as its build tool.</p>
  <h2>File Structure</h2>
  <ul>
    <li><code>index.html</code>: The HTML file that serves as the entry point for the React application.</li>
    <li><code>package-lock.json</code>: The automatically generated file that tracks the exact version of each installed package.</li>
    <li><code>package.json</code>: The file that contains the project's metadata, dependencies, and scripts.</li>
    <li><code>public/</code>: A directory that contains the static assets that will be served by the web server.</li>
    <li><code>src/</code>: A directory that contains the source code of the React application.</li>
    <li><code>vite.config.js</code>: The configuration file for Vite.</li>
  </ul>
  <h2>Setup</h2>
  <ol>
    <li>Clone the repository.</li>
    <li>Install the dependencies using <code>npm install</code>.</li>
    <li>Start the development server using <code>npm run dev</code>.</li>
    <li>Open <code>http://localhost:3000</code> in a web browser to view the application.</li>
  </ol>
  <h2>Available Scripts</h2>
  <p>In the project directory, you can run:</p>
  <h3><code>npm run dev</code></h3>
  <p>Starts the development server.</p>
  <h3><code>npm run build</code></h3>
  <p>Builds the application for production.</p>
  <h3><code>npm run serve</code></h3>
  <p>Serves the production build.</p>
  <h2>Learn More</h2>
  <p>To learn more about React, visit the <a href="https://reactjs.org/">React documentation</a>.</p>
  <p>To learn more about Vite, visit the <a href="https://vitejs.dev/">Vite documentation</a>.</p>
</body>
</html>