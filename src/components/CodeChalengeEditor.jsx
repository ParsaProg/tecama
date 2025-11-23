"use client";

import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import {
  Play,
  RotateCcw,
  CheckCircle,
  XCircle,
  Code,
  FileText,
} from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
  title,
  className = "",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    outline: "border border-gray-600 bg-transparent hover:bg-gray-700",
  };
  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    dir="rtl"
    className={`bg-gray-800 rounded-lg border border-gray-700 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b border-gray-700 ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Tabs = ({ children, value, onChange }) => {
  return (
    <div className="flex flex-col h-full">
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { value, onChange });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, {
            isActive: child.props.value === value,
          });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ children, value, onChange }) => (
  <div className="flex border-b border-gray-700 mb-4">
    {React.Children.map(children, (child) => {
      if (child.type === TabsTrigger) {
        return React.cloneElement(child, {
          isActive: child.props.value === value,
          onClick: () => onChange(child.props.value),
        });
      }
      return child;
    })}
  </div>
);

const TabsTrigger = ({ children, value, isActive, onClick }) => (
  <button
    className={`px-4 py-2 text-sm font-medium ${
      isActive
        ? "border-b-2 border-blue-600 text-blue-600"
        : "text-gray-400 hover:text-gray-200"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabsContent = ({ children, isActive, className = "" }) => (
  <div className={`${isActive ? "block" : "hidden"} ${className}`}>
    {children}
  </div>
);

const Separator = () => <hr className="my-4 border-t border-gray-700" />;

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-900 text-blue-300",
    success: "bg-green-900 text-green-300",
    destructive: "bg-red-900 text-red-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

function CodeChallengeEditor({
  defaultLanguage = "javascript",
  defaultCode = "",
  challenge,
}) {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("editor");
  const [testResults, setTestResults] = useState([]);
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: "on",
      roundedSelection: true,
      cursorStyle: "line",
      automaticLayout: true,
      tabSize: 2,
    });
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");

    try {
      const originalConsoleLog = console.log;
      const logs = [];

      console.log = (...args) => {
        logs.push(
          args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" ")
        );
      };

      try {
        const executeCode = new Function(code + `\n//# sourceURL=user-code.js`);
        executeCode();
        setOutput(logs.join("\n"));
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }

    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(defaultCode);
    setOutput("");
    setTestResults([]);
  };

  const runTests = async () => {
    setIsRunning(true);
    setTestResults([]);

    try {
      const results = [];

      for (const testCase of challenge.testCases) {
        let result;
        let error = null;

        try {
          const functionCode = code + `\n; return solution(${testCase.input});`;
          const executeFn = new Function(functionCode);
          result = String(executeFn());
        } catch (err) {
          error = err.message;
          result = `Error: ${err.message}`;
        }

        results.push({
          passed: !error && result === testCase.expectedOutput,
          input: testCase.input,
          expected: testCase.expectedOutput,
          actual: result,
        });
      }

      setTestResults(results);
    } catch (error) {
      setOutput(`Error running tests: ${error.message}`);
    }

    setIsRunning(false);
  };

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-150px)]"
      dir="ltr"
    >
      <Card className="col-span-1 lg:col-span-2 flex flex-col h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">{challenge.title}</h2>
            <div className="flex gap-2 text-white">
              <Button
                variant="outline"
                size="sm"
                onClick={resetCode}
                title="بازنشانی کد"
              >
                <RotateCcw className="h-4 w-4 ml-1" />
                <span className="hidden sm:inline">بازنشانی</span>
              </Button>
              <Button
                size="sm"
                onClick={runCode}
                disabled={isRunning}
                title="اجرای کد"
              >
                <Play className="h-4 w-4 ml-1" />
                <span className="hidden sm:inline">اجرا</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={runTests}
                disabled={isRunning}
                title="اجرای تست‌ها"
              >
                <CheckCircle className="h-4 w-4 ml-1" />
                <span className="hidden sm:inline">تست</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 overflow-hidden">
          <Tabs
            value={activeTab}
            onChange={setActiveTab}
            className="h-full flex flex-col"
          >
            <div className="px-6">
              <div className="flex items-center gap-x-[20px] mb-3">
                <div onClick={() => setActiveTab("editor")} className="rounded-lg p-2 bg-transparent border-[1px] border-gray-600 flex items-center cursor-pointer text-white">
                  <Code className="h-5 w-4 ml-1" />
                  ویرایشگر کد
                </div>
                <div onClick={() => setActiveTab("output")} className="rounded-lg p-2 bg-transparent border-[1px] border-gray-600 flex items-center cursor-pointer text-white">
                  <FileText className="h-4 w-4 ml-1" />
                  خروجی
                </div>
              </div>
            </div>

            {activeTab === "editor" ? (
              <div dir="ltr" className="h-full border rounded-md border-gray-700">
                <Editor
                  height="100%"
                  language={defaultLanguage}
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  onMount={handleEditorDidMount}
                  theme="vs-dark"
                  options={{
                    readOnly: isRunning,
                  }}
                />
              </div>
            ) : (
              <div className="h-full border rounded-md p-4 bg-gray-900 text-white font-mono text-sm overflow-auto border-gray-700">
                {output ? (
                  <pre>{output}</pre>
                ) : (
                  <div className="text-gray-400 italic">
                    خروجی اینجا نمایش داده خواهد شد...
                  </div>
                )}

                {testResults.length > 0 && (
                  <>
                    <Separator />
                    <div style={{fontFamily: "Vazirmatn"}} className="mb-2 font-bold">نتایج تست:</div>
                    <div style={{fontFamily: "Vazirmatn"}} className="space-y-2">
                      {testResults.map((result, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded ${
                            result.passed ? "bg-green-900" : "bg-red-900"
                          }`}
                        >
                          <div className="flex items-center">
                            {result.passed ? (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500 ml-2" />
                            )}
                            <span>تست {index + 1}: </span>
                            <Badge
                              variant={
                                result.passed ? "success" : "destructive"
                              }
                              className="mr-2"
                            >
                              {result.passed ? "موفق" : "ناموفق"}
                            </Badge>
                          </div>
                          <div className="mt-1 text-xs">
                            <div>ورودی: {result.input}</div>
                            <div>خروجی مورد انتظار: {result.expected}</div>
                            {!result.passed && (
                              <div>خروجی واقعی: {result.actual}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{fontFamily: "Vazirmatn"}} className="mt-4 font-bold">
                      نتیجه:{" "}
                      {testResults.every((r) => r.passed) ? (
                        <span className="text-green-500">
                          تمام تست‌ها با موفقیت گذشتند!
                        </span>
                      ) : (
                        <span className="text-red-500">
                          {testResults.filter((r) => r.passed).length} از{" "}
                          {testResults.length} تست موفق
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </Tabs>
        </CardContent>
      </Card>

      <Card className="h-full overflow-auto">
        <CardHeader>
          <h2 className="text-xl font-bold text-white">توضیحات چالش</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-white">
            <div>
              <h3 className="text-lg font-medium mb-2">مسئله</h3>
              <p>{challenge.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">مثال‌ها</h3>
              <div className="space-y-2">
                {challenge.examples.map((example, index) => (
                  <div key={index} className="p-3 bg-gray-700 rounded-md">
                    <div>
                      <strong>ورودی:</strong> {example.input}
                    </div>
                    <div>
                      <strong>خروجی:</strong> {example.output}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">راهنمایی</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>تابع solution را پیاده‌سازی کنید</li>
                <li>تابع باید یک پارامتر ورودی دریافت کند</li>
                <li>خروجی تابع باید مطابق با مثال‌های ارائه شده باشد</li>
                <li>می‌توانید با دکمه اجرا، کد خود را تست کنید</li>
                <li>
                  با دکمه تست، می‌توانید کد خود را با تمام موارد آزمایش کنید
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CodeChallengeEditor;