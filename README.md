Globo/Globosat API Automated Grid Exporter

1. Summary

A simple web tool to automatically fetch and convert Globosat programming grids into a formatted Excel file.

2. The Problem We're Solving: 

Previously, obtaining Globo and Globosat's programming grid data was a manual, time-consuming process that required either API knowledge (Postman installation and multiple "calls") or relied on an RPA solution (Design Studio) which became more and more inconsistent. Simply viewing the JSON file was also a challenge to the channel editors, as that format is not very user-friendly.

3. Our Solution: 

This tool provides a user-friendly web form that automates the entire process. Users can select the channel and dates they need, and with a single click, receive a perfectly formatted Excel file. This saves time and eliminates manual errors and frustrations.

4. How to Use the Tool

Live URL: https://leorodrigues75.github.io/globosat-form/

Instructions:

- Open the live URL in your browser.
- Select the Environment (Planning or Composite).
- Enter the Channel Code. Use the lookup table on the page if you're unsure.
- Choose a Start Date and End Date.
- Click the "Download File" button. The Excel file will be downloaded to your computer.

5. Technical Architecture

- Frontend: A static HTML, CSS, and JavaScript form hosted on GitHub Pages.

- Backend: A Python Flask API running as a serverless container on Google Cloud Run.

- Security: All API credentials and keys are securely stored and managed using Google Secret Manager.

- Deployment: The backend is deployed via the Google Cloud CLI, and the frontend is hosted directly from the Git repository.

6. Future Improvements

- Update the URL to a custom domain.

- Implement Google Analytics to track Exporter usage and popular channels.

- Implement routines to ensure the channels on the lookup table are being updated.

- Set up automated deployments using GitHub Actions.

- Restrict access to users within the organization using Google Cloud IAM.