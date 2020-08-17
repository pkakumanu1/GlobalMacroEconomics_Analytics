$(document).ready(function () {
  // console.log("Inside js")
  $("#fileInputControl").on("change", fileInputControlChangeEventHandler);
});

function fileInputControlChangeEventHandler(event) {
  let filetInputControl = event.target;
  let files = fileInputControl.files;

  let firstFile = files[0];
  let fileReader = new FileReader();

  fileReader.onload = function (event) {
    let fileContents = event.target.result;


    console.log(fileContents);
    str1 = String.raw`{"text":"`
    str2  = str1.concat(fileContents);
    str3 =String.raw`","features":{"entities":{"limit":250,"model":"616d596e-3d65-4420-ac2b-bfe90fbd81cc"},"relations":{"model":"616d596e-3d65-4420-ac2b-bfe90fbd81cc"}},"return_analyzed_text":false}`
    data = str2.concat(str3);
    console.log(data);
    // fileContents = String.raw`{"text":"Clare Cheung Yick See Flat F, 28/F, Hoi Har Mansion, \t\t\tMobile Tel No: +852 9196 9384 Riviera Gardens, \t\t\tEmail: clarecheung68@gmail.com Tsuen Wan, N.T., HK Personal Statement Gained extensive experience in preparing full financial accounts for trusts, companies in various jurisdictions by achieving professional excellence through management of accounts at work. I am a highly organised, efficient and social person and able to deliver results in highly pressurised and challenging situations.  I Excellent verbal and written communication skills and able to liaise with staff at all levels. Education Currently undertaking exams to be certified under ACCA (Association of Chartered Certified Accountants) 2008 – 2011 \t\tBA International Economics University of Essex 2nd Lower Class with Honours 2001 –2008\t\tA-Levels & IGCSE Garden International School, Malaysia Professional Experience Mar 2013 to Present \t\tAccountant for Nerine Trust Company (Hong Kong) Limited ●\tInternal Accounting Responsibilities: ○\tPerform daily accounting operations, bookkeeping and prepare full sets of Financial Statement and General Ledger transactions, report to Director and management of accounting department ○\tManage cash flow forecasts and other financial budgeting and sales forecasting reports ○\tPrepare Management Accounts, Profit & Loss, Balance Sheet, Accounts Payable and Receivable ○\tPrepare for yearly statutory audit and corporate tax reports for IRD ○\tPrepare MPF and Payroll, Expenses Reimbursement, Employer’s Return to IRD and Profits Tax Return ○\tLiaising with external auditor on internal audit, Reconcile Bank Statements (including multi-currency accounts), liaising with external suppliers for internal expenses ○\tAccounts bookkeeping using various accounting software (including MYOB), Manage and reconcile company expenses, supplier invoices and client payments, petty cash ○\tPreparation of billing of all invoices, control of work in progress timesheets. ●\tExternal Accounting & Company Secretary Responsibilities: ○\tAct as authorised signatory for company, review all documentation to be signed and suggest different ways to deal with accounting, cash flow and portfolio problems. ○\tPreparation of full Financial Accounts (Profit & Loss and Balance Sheet) for all Trust and Companies managed by company in accordance to regulations of the jurisdiction of the company (Hong Kong, British Virgin Islands, UK standards) including full Bookkeeping of all transactions in company portfolio and preparation of Financial Statements. ○\tProficient Preparation of Profits Tax Returns, Salaries Tax Return and Letters to the Inland Revenue with regards to tax letters, ○\tAnalyse investment portfolios and bank statements to manage cash flow for companies under company director care. ○\tProficient at preparing Minutes and Resolutions and other Company Secretary Documentation in relation to auditing and accounts in accordance to HK Company Ordinance. ○\tUnderstanding of Common Reporting Standard (CRS), Client Due Diligence, British Virgin Islands Company Filing and Trust Documentation ○\tLiaising with clients, external auditor on various accounts, Liaising with relationship managers at various commercial and private banks Feb 2012 - Jan 2013 \t\tAccounts Manager/Sales Assistant for Ryder Diamonds Ltd ●\tAccounting Responsibilities: ○\tPerform daily accounting operations and full sets of accounts including general ledger and month-end closing, manage company expenses and petty cash ○\tManage cash flow forecasts and other financial budgeting and budget and sales forecasting reports ○\tReview Accounts Payable and Receivable, Reconcile Bank Statements (including multi-currency accounts). Usage of MYOB software for accounts bookkeeping ○\tManagement of Ryder Collection and Diamonds Stocklist reports, Reconciling Client Payments, ○\tAlso responsible for Producing Financial Statements, Profit & Loss Reporting and Balance Sheet ○\tLiaison with Company Accountant, Company Secretary and Auditors to arrange yearly statutory audit and prepare corporate tax reports for HKIRD purposes ●\tGeneral Administration & HR Responsibilities: ○\tDesigned and implemented filing systems whilst ensuring they are monitored and updated at all times ○\tReporting to the Company Director to review office performance, Ensure security and confidentiality of all Company information ○\tManaged all staff attendance, Leave Requests, monthly commissions for Sales Team, ensured all personnel and staff records are up-to-date, training new office staff  Policy & Procedures ○\tResolved administrative problems and enquiries, Maintained office supply inventories (Stationary, general supplies), maintenance of office equipment and inventory ●\tSales Assistant Responsibilities: ○\tLiaison with production and sales team to ensure time management on production of bespoke jewellery pieces ○\tLiaison with Diamond Suppliers to ensure quick delivery of needed products. 2012 - 2013\t\tTemp Helper for HKTDC Business Matching Team, HKTDC ●\tHandle enquiries from exhibitors, Call up the HK companies for meeting, Escort business meetings between Hong Kong & Overseas exhibitors/buyers, Collect the surveys and comments from Hong Kong and overseas customers ●\tExtra logistics support e.g. packing onsite materials, set up the meeting rooms, banners, foam board, etc. Skills and Achievements Corporate Skills\tTaking ACCA Exams, Understand Common Reporting Standard (CRS), BVI Company Filing, Basic Trust understanding and documentation, Companies Registry Forms Information Technology\tProficient in all Microsoft Office, use of the Internet for research purposes,using html to create and maintain webpages, Basic understanding of Data processing programmes such as STATA Languages\tEnglish – Native in both Speech and Writing Chinese (Cantonese) – Native Speaker Chinese (Mandarin) Interests and Other Activities ●\tIn Oct –  Feb 2012 , I volunteered in the Society of Prevention of Cruelty to Animals (HK) and ●\tIn 2011, I ran for Vice-President Education in the Essex University Students’ Union Election for which I received over 1200 votes. ●\tIn University, was Treasurer for Labour Society, Executive Events coordinator for the Essex Economics Society and Vice-President of the Malaysian Society ●\tJoined Model United Nations programme and represented United States of America in THIMUN Singapore 2007 as well as represented Ecuador in the WorldMUN in The Hague in April 2009. ●\tIn 2008, I volunteered in Koh Phi Phi, Thailand, where my school amongst others, raised money and built a community centre for the victims of the Tsunami in 2004.","features":{"entities":{"limit":250,"model":"616d596e-3d65-4420-ac2b-bfe90fbd81cc"},"relations":{"model":"616d596e-3d65-4420-ac2b-bfe90fbd81cc"}},"return_analyzed_text":false}`
    analyseCV(data);
    $("#preview").text(fileContents);
  }

  fileReader.readAsText(firstFile);
}

function analyseCV(data) {
  var settings = {
    "url": "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2019-07-12",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Basic YXBpa2V5OktTblpMSHRMRVoxYjZWZmhsVVlkUVZZZUdxSmtEVV9oQllleEZWb25nWXFU",
      "Content-Type": "application/json"
    },
    "data": data,
  };
  console.log(settings);
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response['entities'][0]);
    console.log(response['entities'][0]['text']);
    console.log(response['entities'][0]['confidence']);
    var tableData = response['entities'];
    var body = d3.select("#res-table>tbody");


    tableData.forEach(function (record) {
      console.log(record['type']);
      console.log(record['text']);
      console.log(record['confidence']);

        var row = body.append('tr')
                      .text(record['type'])
                      .append('td')
                      .text(record['text'])
                      .append('td')
                      .text(record['confidence'])
  });

  });



}

