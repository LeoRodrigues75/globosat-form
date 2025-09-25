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

5.1 Open Google Cloud SDK Shell
5.2 Authenticate: gcloud auth login
5.3 Set your default project: gcloud config set project [YOUR_PROJECT_ID]
5.4 Set your default region: gcloud config set run/region [YOUR_REGION]
5.5 Navigate to the project's root folder
5.6 Run deployment command: gcloud run deploy [SERVICE_NAME] --source . --region [REGION] --allow-unauthenticated --service-account="[SERVICE_ACCOUNT_NAME]@[YOUR_PROJECT_ID].iam.gserviceaccount.com" --set-secrets="env:GLOBOSAT_API_KEY=GLOBOSAT_API_KEY:latest,env:GLOBOSAT_CLIENT_SECRET=GLOBOSAT_CLIENT_SECRET:latest,env:GLOBOSAT_CLIENT_ID=GLOBOSAT_CLIENT_ID:latest,env:GLOBOSAT_RESOURCE=GLOBOSAT_RESOURCE:latest"

[SERVICE_NAME]: The name of your Cloud Run service.
[REGION]: The Google Cloud region where your service is deployed.
[SERVICE_ACCOUNT_NAME]: The name of the dedicated service account you created.
[YOUR_PROJECT_ID]: The unique ID of your Google Cloud project.

5.4 To update the Frontend, go to the project repository and upload "index.html", "style.css" and "script.js", which should overwrite old versions.

6. Future Improvements

- Update the URL to a custom domain.
- Implement Google Analytics to track Exporter usage and popular channels.
- Implement routines to ensure the channels on the lookup table are being updated.
- Set up automated deployments using GitHub Actions.
- Restrict access to users within the organization using Google Cloud IAM.