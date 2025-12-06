<div align="center">
  <img src="https://github.com/Luc4st1574/nexus-fire-ecommerce-engine/raw/main/readme/assests/Nexus%20Fire%20logo.png" alt="Nexus Fire Icon" width="150" />
  <br />
  <h1>Client Project Template</h1>
</div>

<blockquote>
  <p><strong>⚠️ INTERNAL USE ONLY</strong></p>
  <p>This is the master template for generating new client applications. <br />
  <strong>Note:</strong> Upon running the setup script, <strong>this <code>README.md</code> file will be automatically deleted</strong> and replaced with a clean, client-facing README containing only the business information.</p>
</blockquote>

<hr />

<h2>🛠️ Prerequisites</h2>
<p>Before initializing a new client project, ensure you have the following installed:</p>
<ul>
  <li><strong>Node.js</strong> (v18 or higher)</li>
  <li><strong>Git</strong></li>
  <li><strong>Firebase CLI</strong> (Optional, but recommended)</li>
</ul>

<hr />

<h2>🚀 Initialization Workflow</h2>
<p>This template includes an automated CLI tool to white-label the project. Follow this specific order to ensure dependencies are loaded before configuration.</p>

<h3>1. Clone the Template</h3>
<p>Clone this repository to your local machine:</p>
<pre><code>git clone https://github.com/Luc4st1574/nexus-fire-ecommerce-engine.git</code></pre>

<h3>Go to the new folder</h3>
<pre><code>cd nexus-fire-ecommerce-engine</code></pre>

<h3>2. Install Dependencies</h3>
<p>Install the necessary packages <strong>before</strong> running the setup wizard to ensure the scripting tools work correctly:</p>
<pre><code>npm install</code></pre>

<h3>3. Run the Setup Wizard 🧙‍♂️</h3>
<p>Run the initialization command to configure the client environment:</p>
<pre><code>npm run project:setup</code></pre>

<p><strong>The Wizard will perform these actions in order:</strong></p>
<ol>
  <li><strong>Firebase Connection (Priority):</strong>
    <ul>
      <li>Asks for the <strong>Firebase Project ID</strong> and <strong>API Keys</strong> immediately.</li>
      <li>Automatically generates the <code>.env</code> file with the correct credentials.</li>
      <li>Updates <code>firebase.json</code> with the new project alias.</li>
    </ul>
  </li>
  <li><strong>Client Configuration:</strong>
    <ul>
      <li>Prompts for the <strong>Business Name</strong> (e.g., "Kyber Tech").</li>
      <li>Renames the root project folder to match the business name (e.g., <code>./kyber-tech</code>).</li>
    </ul>
  </li>
  <li><strong>Git Reset:</strong>
    <ul>
      <li>Removes the existing <code>origin</code> remote (Nexus Fire).</li>
      <li>Prompts for the <strong>New Remote URL</strong> (the client's specific repository).</li>
      <li>Initializes a fresh Git history for the client.</li>
    </ul>
  </li>
  <li><strong>Self-Destruct & Cleanup:</strong>
    <ul>
      <li>Deletes "Nexus Fire" branding assets.</li>
      <li><strong>Deletes this <code>README.md</code></strong> and generates a new <code>README.md</code> tailored to the client.</li>
    </ul>
  </li>
</ol>

<br />

<div align="center">
  <img src="https://github.com/Luc4st1574/nexus-fire-ecommerce-engine/raw/main/readme/assests/Nexus%20Fire%20text%20logo.png" alt="Nexus Fire Text Logo" width="300" />
</div>

<br />

<hr />

<h3>4. Manual Setup (Fallback)</h3>
<p><em>Use this only if the automated script fails.</em></p>

<ol>
  <li>
    <strong>Install Dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <strong>Firebase Config:</strong>
    <ul>
      <li>Rename <code>.env.example</code> to <code>.env</code>.</li>
      <li>Paste the client's Firebase keys into the file.</li>
    </ul>
  </li>
  <li>
    <strong>Rename Folder:</strong> Manually change the folder name to the client's name.
  </li>
  <li>
    <strong>Reset Git:</strong>
    <pre><code>rm -rf .git
git init
git remote add origin &lt;NEW_CLIENT_REPO_URL&gt;</code></pre>
  </li>
  <li>
    <strong>Cleanup:</strong> Manually delete this README and the <code>readme/assests</code> folder.
  </li>
</ol>

<hr />

<h2>📦 Development Commands</h2>
<p>Once initialized, the project uses standard commands:</p>

<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>npm run dev</code></td>
      <td>Starts the development server.</td>
    </tr>
    <tr>
      <td><code>npm run build</code></td>
      <td>Builds the project for production.</td>
    </tr>
    <tr>
      <td><code>npm run preview</code></td>
      <td>Previews the production build locally.</td>
    </tr>
    <tr>
      <td><code>npm run lint</code></td>
      <td>Runs ESLint checks.</td>
    </tr>
  </tbody>
</table>

<hr />

<h2>📂 Project Structure</h2>
<pre><code>/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── firebase/        # Firebase initialization & logic
│   ├── layouts/         # Page layouts
│   ├── pages/           # Application routes
│   └── styles/          # Tailwind & Global styles
└── package.json         # Project configuration</code></pre>

<hr />

<h2>📄 License & Credits</h2>

<p><strong>Apache License 2.0</strong></p>
<p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:</p>
<p><a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a></p>

<p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>

<br />

<p align="center">
  <strong>Developed by Lucas Santillan © 2025</strong>
</p>
