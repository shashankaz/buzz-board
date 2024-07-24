import React from "react";
import styles from "./GoogleSpreadsheet.module.css";

const GoogleSpreadsheet = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBIZbI9Dt2UxwCf0XEUcppCvxUWx86sRlnWcOkrAXHLt3e9KBVMHThVIDmCGvFBgJylbhSGjYLk3DS/pubhtml?widget=true&amp;headers=false"
        className={styles.iframe}
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
