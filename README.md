# Dynamic Form Generator

This is a dynamic form generator built with Next.js, TypeScript, and Tailwind CSS. It generates a form in real-time based on a given JSON schema, with live updates as the JSON is edited.

## Features

- **Real-time Form Generation**: The form is generated instantly as the JSON schema is updated.
- **JSON Editor**: A split-screen layout where the JSON schema can be edited on the left side.
- **Form Validation**: Form validation is performed in real-time, with proper error messages displayed.
- **Responsive Layout**: The application is mobile-friendly, with the editor and form stacking on smaller screens.
- **Submit Data**: Upon submission, the form data is logged to the console, and a success message is displayed.
- **Styling**: The form is styled using Tailwind CSS for a clean, responsive design.

## Example JSON Schema

Here’s an example of a JSON schema that you can use to generate the form:

```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    },
    {
      "id": "industry",
      "type": "radio",
      "label": "Industry",
      "required": true,
      "options": [
        { "value": "tech", "label": "Technology" },
        { "value": "healthcare", "label": "Healthcare" },
        { "value": "finance", "label": "Finance" },
        { "value": "retail", "label": "Retail" },
        { "value": "other", "label": "Other" }
      ]
    },
    {
      "id": "timeline",
      "type": "select",
      "label": "Project Timeline",
      "required": true,
      "options": [
        { "value": "immediate", "label": "Immediate (within 1 month)" },
        { "value": "short", "label": "Short-term (1-3 months)" },
        { "value": "medium", "label": "Medium-term (3-6 months)" },
        { "value": "long", "label": "Long-term (6+ months)" }
      ]
    },
    {
      "id": "comments",
      "type": "textarea",
      "label": "Additional Comments",
      "required": false,
      "placeholder": "Any other details you'd like to share..."
    }
  ]
}
Setup Instructions
To run this project locally, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js (v16.x or later)
Yarn (optional, but recommended)
Git (for cloning the repository)
Steps
Clone the repository:

Open your terminal and run the following command to clone the repository:

bash
Copy code
git clone <repository_url>
cd dynamic-form-generator
Install dependencies:

To install the required dependencies, use one of the following commands, depending on your package manager:

Using npm:

bash
Copy code
npm install
Or, using Yarn:

bash
Copy code
yarn install
Run the development server:

Once the dependencies are installed, start the development server with the following command:

Using npm:

bash
Copy code
npm run dev
Or, using Yarn:

bash
Copy code
yarn dev
Open your browser and go to http://localhost:3000 to view the form generator in action.

The form will be generated based on the JSON schema, and you can edit the schema to see the live updates in the form.

Deployment
You can deploy this project on platforms like Vercel or Netlify.

Deploy on Vercel
Push your project to a GitHub repository.
Go to Vercel and log in or sign up.
Click New Project, import your repository, and follow the steps to deploy.
Deploy on Netlify
Push your project to a GitHub repository.
Go to Netlify and log in or sign up.
Click New Site from Git, connect your repository, and follow the steps to deploy.
Testing
This project includes tests written using Jest and Playwright.

Running Unit Tests
To run unit tests:

bash
Copy code
npm run test
# or
yarn test
Running E2E Tests
To run Playwright's end-to-end tests:

bash
Copy code
npm run e2e
# or
yarn e2e
Bonus Features
Copy Form JSON: A button to copy the generated JSON schema to the clipboard.
Form Field Validation Preview: Displays live feedback on form validation as the JSON is edited.
Dark Mode: Option to toggle dark mode.
Download Form Submissions as JSON: Ability to download the form submissions as a JSON file.
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Key Sections:
- **Features**: Lists all the major functionalities of the application.
- **Example JSON Schema**: Provides a sample JSON schema that generates a form.
- **Setup Instructions**: Includes detailed steps to set up the project, install dependencies, and run the development server.
- **Deployment**: Explains how to deploy the app to Vercel or Netlify.
- **Testing**: Provides instructions to run unit and end-to-end tests.
- **Bonus Features**: Mentions additional features you can add to the app for enhanced functionality.
- **License**: Includes a section about the license (MIT License in this case).

This `README.md` now includes everything necessary for setting up, running, and deploying the dynamic form generator project.#   D y n a m i c _ F o r m _ G e n e r a t i o n  
 #   D y n a m i c _ F o r m _ G e n e r a t i o n  
 