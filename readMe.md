<h1>JavaScript MutationObserver Chrome Extension</h1>

<p>This Chrome extension uses the MutationObserver API to automatically detect and skip ads on YouTube. It continuously monitors changes in the DOM to find and click the "Skip Ad" button as soon as it becomes available.</p>

<h2>Features</h2>
<ul>
    <li>Automatically detects and skips YouTube ads.</li>
    <li>Uses multiple selectors to identify the "Skip Ad" button.</li>
    <li>Employs the MutationObserver API for efficient ad detection.</li>
</ul>

<h2>How It Works</h2>
<ul>
    <li>The extension observes changes to the YouTube video player’s DOM.</li>
    <li>When a mutation is detected, it checks for the presence of the "Skip Ad" button using various selectors.</li>
    <li>If the button is found, it is clicked automatically to skip the ad.</li>
</ul>

<h2>Installation</h2>
<ul>
    <li>Download the extension files.</li>
    <li>Open Chrome and navigate to <code>chrome://extensions/</code>.</li>
    <li>Enable "Developer mode" by toggling the switch in the top right corner.</li>
    <li>Click "Load unpacked" and select the directory containing the extension files.</li>
</ul>

<h2>Usage</h2>
<ul>
    <li>Once installed, the extension will run automatically on YouTube video pages.</li>
    <li>It will attempt to skip ads as soon as the "Skip Ad" button is available.</li>
</ul>

<h2>Contributing</h2>
<p>If you'd like to contribute, please follow these steps:</p>
<ul>
    <li>Fork the repository on GitHub.</li>
    <li>Create a new branch for your changes.</li>
    <li>Make your changes and test them thoroughly.</li>
    <li>Submit a pull request with a clear description of your changes.</li>
</ul>
