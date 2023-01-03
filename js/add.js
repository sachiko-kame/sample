const dbName = 'sample_db';
const objectName = 'sampleObj';
const indexName = 'indexName';

const key_marked = 'marked';
const key_markdown_wasm = 'markdown_wasm';
const key_xss = 'xss';
data_first_injection();


$('#marked_textarea').on("keyup", function () {
  const str1 = $("#marked_textarea").val();
  data_save(key_marked, str1)
  document.getElementById('marked_content').innerHTML = marked.parse(str1);
});

$('#markdown-wasm_textarea').on("keyup", function () {
  const str1 = $("#markdown-wasm_textarea").val();
  data_save(key_markdown_wasm, str1);
  document.getElementById('markdown-wasm_content').innerHTML = markdown.parse(str1);
});

$('#xss_textarea').on("keyup", function () {
  // const str1 = document.getElementById("xss_textarea").value;
  const str1 = $("#xss_textarea").val();
  data_save(key_xss, str1)
  document.getElementById('xss_content').innerHTML = str1;
});

function data_first_injection() {
  var request = window.indexedDB.open(dbName);
  request.onerror = function (event) {
  };
  request.onsuccess = function (event) {
    var db = event.target.result;
    //前回入力されたデータがあれば差し込む。
    let a_marked = db.transaction(objectName, "readwrite").objectStore(objectName).get(key_marked);
    let a_markdown_wasm = db.transaction(objectName, "readwrite").objectStore(objectName).get(key_markdown_wasm);
    let a_xss = db.transaction(objectName, "readwrite").objectStore(objectName).get(key_xss);

    a_marked.onsuccess = (event) => {
      if (event.target.result != undefined) {
        document.getElementById('marked_content').innerHTML = marked.parse(event.target.result); //a_marked.resultでも取得可能
      };
    };
    a_markdown_wasm.onsuccess = (event) => {
      if (event.target.result != undefined) {
        //markdown-wasm ここでエラー確認 //クリアした時問題なし //クリアして文字入力して何回目か(1,2回目ぐらい)で出力される。chromeでキャッシュするとでなくなった。
        document.getElementById('markdown-wasm_content').innerHTML = markdown.parse(event.target.result); //a_markdown_wasm.resultでも取得可能
      };
    };
    a_xss.onsuccess = (event) => {
      if (event.target.result != undefined) {
        document.getElementById('xss_content').innerHTML = event.target.result; //a_xss.resultでも取得可能
      };
    };
  }
  //データベース作成時の一回目のみ発火。
  request.onupgradeneeded = function (event) {
    var db = event.target.result;
    //オブジェクト作成
    db.createObjectStore(objectName);
  };

};

function data_save(key, value) {
  var request = window.indexedDB.open(dbName);
  request.onerror = function (event) {
  };
  request.onsuccess = function (event) {
    var db = event.target.result;
    //値が更新されるようputを使用。
    db.transaction(objectName, "readwrite").objectStore(objectName).put(value, key);

  }
  //データベース作成時の一回目のみ発火。
  request.onupgradeneeded = function (event) {
    var db = event.target.result;
    //オブジェクト作成
    db.createObjectStore(objectName);
  };
};