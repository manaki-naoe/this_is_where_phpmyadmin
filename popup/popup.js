const saveDataName = "SaveData";
$(function(){

  //リストへの要素の追加
  const addCopyFormat = (str)=>{
    const list = $("#CopyFormat");
    list.append($("<option>").text(str).val(list.children().length+1));
  }
  $("#Add").on("click", ()=>{
    console.log($("#text").val());
    addCopyFormat($("#text").val());
  });

  //リストへの要素の削除
  $("#Delete").on("click", ()=>{
    $("#CopyFormat > option:selected").remove();
  });

  //リストの内容を保存
  $("#Save").on("click", ()=>{
    let saveData = {"CopyFormat":[], "SelectedIndex":"1"};
    console.log(saveData);
    for (const option of $("#CopyFormat").children())
    {
      saveData.CopyFormat.push(option.text);
    }
    saveData.SelectedIndex = $("#CopyFormat").val();
    localStorage.setItem(saveDataName, JSON.stringify(saveData));
    console.log(saveData);
  });

  //設定データをクリアする
  $("#Clear").on("click", ()=>{
    localStorage.clear();
  });

  //保存データの読み込み
  const loadData = ()=>{
    const data = JSON.parse(localStorage.getItem(saveDataName));
    console.log(data);
    if (data == null){
      $("#CopyFormat").val("1");
    } else {
      data.CopyFormat.forEach((x)=>{ addCopyFormat(x); });
      $("#CopyFormat").val(data.SelectedIndex);
    }
  }
  loadData();
});