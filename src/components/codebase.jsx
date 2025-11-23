import MonacoEditor from "react-monaco-editor";

export default function CodeBase(){
    function editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
      }
      function onChange(newValue, e) {
        console.log('onChange', newValue, e);
      }
    const code = "print(Hello world)";
    const options = {
        selectOnLineNumbers: true
      };
    return (
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          editorDidMount={editorDidMount}
          onChange={onChange}
        />
      );
}