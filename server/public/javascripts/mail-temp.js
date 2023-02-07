// Html template for sending email
const HTML_TEMP = (name, email, message) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body style="">
    <table style="background-color:#ccd6f6; border-collapse:collapse; font-family: Arial, Helvetica, sans-serif; width: 50%; margin:auto;">
      <thead>
        <tr>
          <th scope="col" style="padding: 15px;">Form Submission</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #f2f2f2;">
          <th scope="row" style="border-bottom: 1px solid; padding: 15px; text-align: left;">Name:</th>
          <td style="border-bottom: 1px solid; padding: 15px; text-align: left;">${name}</td>
        </tr>
        <tr>
          <th scope="row" style="border-bottom: 1px solid; padding: 15px; text-align: left;">Email:</th>
          <td style="border-bottom: 1px solid; padding: 15px; text-align: left;">${email}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
          <th scope="row" style="border-bottom: 1px solid; padding: 15px; text-align: left;">Message:</th>
          <td style="border-bottom: 1px solid; padding: 15px; text-align: left;">${message}</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
};

module.exports = HTML_TEMP;
