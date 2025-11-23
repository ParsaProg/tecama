import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Default Quill styles
import "../../styles/rich-text-box.css";

const TextEditor = () => {
  const [value, setValue] = useState(""); // State to store editor content

  // Toolbar configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Headings
      ["bold", "italic", "underline"], // Bold, italic, underline
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      ["blockquote", "code-block"], // Blockquote, code block
      [{ align: [] }], // Text alignment
      ["clean"], // Clear formatting
    ],
  };

  // Enable RTL direction in Quill
  const DirectionAttribute = Quill.import("attributors/style/direction");
  const AlignStyle = Quill.import("attributors/style/align");
  Quill.register(DirectionAttribute, true);
  Quill.register(AlignStyle, true);

  // Localize tooltips to Persian
  useEffect(() => {
    const toolbarButtons = document.querySelectorAll(
      ".ql-toolbar button, .ql-toolbar .ql-picker-label"
    );
    const persianTooltips = {
      "ql-bold": "پررنگ",
      "ql-italic": "کج",
      "ql-underline": "زیرخط",
      'ql-list[value="ordered"]': "لیست شماره‌دار",
      'ql-list[value="bullet"]': "لیست نقطه‌ای",
      "ql-blockquote": "نقل‌قول",
      "ql-code-block": "بلوک کد",
      "ql-clean": "پاک کردن فرمت",
      "ql-header": "سرتیتر", // For the header dropdown
    };

    toolbarButtons.forEach((button) => {
      const className = button.className
        .split(" ")
        .find((cls) => persianTooltips[cls]);
      if (className && persianTooltips[className]) {
        button.setAttribute("title", persianTooltips[className]);
      }
    });

    // Localize alignment buttons
    const alignButtons = document.querySelectorAll(".ql-align button");
    alignButtons.forEach((button) => {
      if (button.classList.contains("ql-align")) {
        if (button.value === "") button.setAttribute("title", "تراز وسط");
        if (button.value === "right") button.setAttribute("title", "تراز راست");
        if (button.value === "left") button.setAttribute("title", "تراز چپ");
        if (button.value === "justify")
          button.setAttribute("title", "تراز کامل");
      }
    });

    // Localize header dropdown options
    const headerOptions = document.querySelectorAll(
      ".ql-header .ql-picker-item"
    );
    headerOptions.forEach((option) => {
      const value = option.getAttribute("data-value");
      if (value === "1") option.setAttribute("data-label", "سرتیتر ۱");
      if (value === "2") option.setAttribute("data-label", "سرتیتر ۲");
      if (value === "3") option.setAttribute("data-label", "سرتیتر ۳");
      if (!value) option.setAttribute("data-label", "معمولی");
    });
  }, []);

  return (
    <div className="rounded-md">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        placeholder="پاسخ خود را اینجا بنویسید..." // Persian placeholder
        style={{
          height: "200px",
          direction: "rtl",
          fontFamily: "'Vazirmatn', sans-serif",
          borderRadius: "10px"
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "list",
          "bullet",
          "blockquote",
          "code-block",
          "align",
          "direction",
        ]}
        bounds={"#root"}
      />
    </div>
  );
};

export default TextEditor;
