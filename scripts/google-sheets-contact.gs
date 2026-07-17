/**
 * Google Apps Script for Love Today contact form
 *
 * Setup:
 * 1. Create a Google Sheet (e.g. "Love Today Contacts")
 * 2. Add headers in row 1: Timestamp | Name | Phone | Email | Message
 * 3. Extensions → Apps Script → paste this file
 * 4. Click Run on doGet once and approve permissions
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone   (NOT "Anyone with Google account")
 * 6. Copy the Web app URL into .env as VITE_GOOGLE_SHEETS_URL
 * 7. If you change the script, Deploy → Manage deployments → Edit → New version → Deploy
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter;

    sheet.appendRow([
      new Date(),
      params.name || "",
      params.phone || "",
      params.email || "",
      params.message || "",
    ]);

    return ContentService.createTextOutput(
      "<html><body><h3>Message received</h3></body></html>"
    ).setMimeType(ContentService.MimeType.HTML);
  } catch (error) {
    return ContentService.createTextOutput(
      "<html><body><h3>Error: " + error.message + "</h3></body></html>"
    ).setMimeType(ContentService.MimeType.HTML);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    "<html><body><h3>Contact form endpoint is live.</h3></body></html>"
  ).setMimeType(ContentService.MimeType.HTML);
}
