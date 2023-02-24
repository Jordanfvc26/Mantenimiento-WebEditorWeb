//******************************************************************************
// wew app
//******************************************************************************
const wew = {};
/*
wew.imgHTML = "data:image/png;base64,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";
wew.imgCSS = "data:image/png;base64,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";
wew.imgJS = "data:image/png;base64,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";
wew.imgXML = "data:image/png;base64,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";
wew.imgJSON = "data:image/png;base64,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";
wew.imgTXT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABS9JREFUeNq0V11MHFUUPjNzZ9hddlvbtIVKQlNKor6Yiok/IGABjZWwsKT8JKYP9cEXY+JDoya++KhNavx58cE+GDVhqS4sqVRTsSlNm75Y9aWtSEGoVUlaQAPYLeyM55yZOzu7zACL9W7O3r9zz/3uOeeee0axLAuoKIoi0un0INatpmnCfykoA1BGOpFIHMLuih+P3JcbTic2NDRk3asyMzNj9ff3p1CuFgSASHjGQvLk3//wIyiqCgr+Nlos+uH6Rx/ZD319fdDb2wsNDQ0JBDHS3d3dEqQJ1as52dANAwxdB8MogpCf1rFQBD8//xeUlZVBfX19YyqVmiax6wFwi4YCNE0rnlTV9YFQJAy3b89CeXk51NbW7h4YGPjVD0QwgE2SY2AIoTaisairibq6uvvRyW8WghC+ahGC1agU4fnsxo4P7auuBrQ9a4IcjXyLfALLTqRSpPk1AQjcXFXVfOdQlFU7kuOxoyp8aLCQZ3ZuDmpqapgCrp6xvga0HAA6BWujAIC8RjQu50zsLywtwcLiIrcJleXwVu3Z46s54e8DmgtAxfbFC+fzNGJr24T6hkY4P3rOnZNj585+B09hTX1PnNk4AFUgAOdUqqbA001N9iZSC87JaINGZ05x/IBiwYGWFshms+7FNosFIPDUUq2kjbMjI3zNCmzAgptbnoGRb8+4gCWwA03NkMUfH6JYAJqWszm1nzt40FWz1/ay0Lyc43cA6+zKirwbmzCBlgvDtPHp4WEGQjql0z3f2grDp05xuPY6JY1/hePUJlByYwuKNoHIc8j2eAeD8mog3t7h3hLvfW9ri/M4+4C1fvwI1IAjnTUwmB7Iu4oSREdnJwymUrlriAASOPbFyZPQkUhgXLB9ZcMApMrcmO6YoKura1UckPw05/UJavf09MAK+oBCQD3r/HwhMBQzckcD9LzSBhROk8lknkPKMEs83nhwiICReRw5wTE8Fyh2YULEyYRpZi0zaxP2NpmSmK4MkkeF5NM+QQkJhA3dMb0KRb1E/okZ3pJ8IVJ+oAk+/uYyjF6bh6sT47y/ySr2hFIcVB2vZ3IDD/GYOX9jPnqecw/VQ1XVMDY1sTaAUIkBkVAJbNsStfu6AZUVu9ChsiyEBC5lMjBx409uk82zaO8S5NtXWe4AoeClQObuCkz/McMOTQchuSR/TQAMGP9IIAl6sLoSXn4hnrfgyvgUVJTtgLHJ3+CDT9NwpPNZaHpy/yrBv0zdhHdPfAkC3xW+JQRYWS8OWDbpeAto0bXxG/DSm+/B0p0MfHb8dTh89B0owUxnx/at8PbRF+Gxhx/gzV87dgJuzc5DZnkZPj/+BvIdg2gkxLmi6j5g4BuYhF9uo2mCDSkEeikmm4pqP0SRcITV+PfCPzB45iK8crgdPkqexhzgDsSipaBnlh2+MIRCIRCe6BkUFlW/1ErXBZLGtUFk2DippjFSq7zzFTu3s8Z0zopzfAauJz4iWhMUD1WfwIDIRR7pwr4+QtNBQ++uqtgN8eYn4P1PhqCt6XHYW1HOXq9rNh/xF8oICsm+WTGfyCUdndIWTLXAvODVI+1w6acxmP79FtfU3xKL5PHROq+cDb0FMv9jJ/TYhMaSwxfQtiHmeevDPp7aGiuFr0cvM9F1C+M88YXZ/pobzOSb4veeFD5GCz9PXo8WPhrUvz49yTHdFmJBfqi0+8Q3gXzeRNV7OJK/Kl56vo7vw2ov0ja4B4E44NNhDmmSvgvcfT0AdOejwYD/r9xFWkRalvv+K8AA/kfP389Z0yMAAAAASUVORK5CYII=";
*/
wew.imgHTML = "img/File-Extension-Html.png";
wew.imgCSS = "img/File-Extension-Css.png";
wew.imgJS = "img/File-Extension-Js.png";
wew.imgXML = "img/File-Extension-Xml.png";
wew.imgJSON = "img/File-Extension-Json.png";
wew.imgTXT = "img/File-Extension-Txt.png";

wew.curFile = "index.html";
wew.curLanguage = "htmlmixed";
wew.theme = "default";
wew.fontSize = 1;
wew.fontUnit = "rem";
wew.viewMenu = true;
wew.viewBracketsKeys = false;
wew.autoCloseBrackets = true;
wew.autoCloseTags = true;

/**
 * Init Web Editor Web
 * @returns {void}
 */
wew.init = () => {

    //CSS for themes
    wew.globalStyles = document.createElement('style');
    wew.globalStyles.type = 'text/css';
    document.querySelector("head").appendChild(wew.globalStyles);
    CodeMirror.commands.autocomplete = (cm) => cm.showHint({hint: CodeMirror.hint.anyword});
    //Set editor from textarea
    wew.editor = CodeMirror.fromTextArea(document.querySelector('#wew_Editor'));
    wew.editor.setOption("lineNumbers", true);
    wew.editor.setOption("smartIndent", true);
    wew.editor.setOption("indentUnit", 4);
    wew.editor.setOption("tabSize", 4);
    wew.editor.setOption("styleActiveLine", true);
    wew.editor.setOption("matchBrackets", true);
    wew.editor.setOption("matchTags", {bothTags: true});
    wew.editor.setOption("autoCloseBrackets", wew.autoCloseBrackets);
    wew.editor.setOption("autoCloseTags", wew.autoCloseTags);
    wew.editor.setOption("lint", true);
    wew.editor.setOption("foldGutter", true);
    wew.editor.setOption("gutters", ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"]);
    wew.editor.setOption("mode", {name: "htmlmixed", globalVars: true});    

    wew.editor.setOption("extraKeys", {
        "Tab": (cm) => {
            if (cm.getSelection().length) {
                CodeMirror.commands["indentMore"](cm);
            } else {
                var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
                cm.replaceSelection(spaces);
            }
        },
        "Shift-Tab": "indentLess",
        "Ctrl-Space": "autocomplete",
        "Shift-Alt-F": () => wew.formatCode(),
        "Ctrl-Q": (cm) => cm.foldCode(cm.getCursor()),
        "Ctrl-Alt-N": () => wew.newHTML(),
        "Ctrl-S": () => wew.saveHTML(),
        "Ctrl-O": () => document.querySelector('#wew_OpenFile').click(),
        "Shift-Ctrl-Alt-Up": (cm) => wew.duplicateLines(cm, true),
        "Shift-Ctrl-Alt-Down": (cm) => wew.duplicateLines(cm, false),
        "Alt-Up": (cm) => wew.moveLines(cm, true),
        "Alt-Down": (cm) => wew.moveLines(cm, false),
        "Shift-Ctrl-Up": (cm) => wew.duplicateLines(cm, true),
        "Shift-Ctrl-Down": (cm) => wew.duplicateLines(cm, false),
        "Shift-Alt-Up": (cm) => wew.moveLines(cm, true),
        "Shift-Alt-Down": (cm) => wew.moveLines(cm, false),
        "F1": () => wew.openHelpDialog(),
        "F2": () => wew.openRenameDialog(),
        "F9": () => wew.runHTML(),
        "F8": () => wew.openConfigDialog(),
        "F10": () => {
            if (wew.viewMenu) {
                wew.hideMenu();
            } else {
                wew.showMenu();
            }
        }
    });

    //Editor config
    wew.editor.setSize(window.innerWidth + "px", window.innerHeight + "px");
    wew.setCurFile(wew.curFile);
    document.querySelector("#wew").style.display = "block";
    wew.editor.getWrapperElement().style["font-size"] = wew.fontSize + wew.fontUnit;

    wew.panels = {};
    //Menu
    wew.menu = document.querySelector("#wew_Menu");
    document.querySelector("#wew").removeChild(wew.menu);
    if (wew.viewMenu) {
        wew.showMenu();
    } else {
        wew.hideMenu();
    }
    //Keys
    wew.bracketsKb = document.querySelector("#wew_Keys");
    document.querySelector("#wew").removeChild(wew.bracketsKb);
    if (wew.viewBracketsKeys) {
        wew.panels[wew.bracketsKb.id] = wew.editor.addPanel(wew.bracketsKb, {position: "bottom", stable: true});
    }

    wew.setTheme(wew.theme);
    wew.editor.refresh();
    wew.editor.focus();
};

/**
 * Set current file name
 * @param {String} curFile
 * @returns {void}
 */
wew.setCurFile = (curFile) => {
    document.title = "WEW - " + curFile;
    wew.curFile = curFile;
    
    if (wew.viewMenu) {
        document.querySelector("#wew_ButtonRun").style.display = "none";
        wew.editor.setOption("lint", true);
        if (wew.curFile.endsWith("html") || wew.curFile.endsWith("htm") || wew.curFile.endsWith("xhtml")) {
            document.querySelector("#wew_ButtonRun").style.display = "inline";
            wew.setLanguage("htmlmixed");
            document.querySelector("#wew_Filename").innerHTML = "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgHTML + "'/>&nbsp;";
        } else if (wew.curFile.endsWith("xml")) {
            wew.setLanguage("htmlmixed");
            document.querySelector("#wew_Filename").innerHTML = "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgXML + "'/>&nbsp;";
        } else if (wew.curFile.endsWith("js")) {
            wew.setLanguage("javascript");
            document.querySelector("#wew_Filename").innerHTML = "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgJS + "'/>&nbsp;";
            wew.editor.setOption("lint", {options: {esversion: 6}});
        } else if (wew.curFile.endsWith("json")) {
            wew.setLanguage("javascript");
            document.querySelector("#wew_Filename").innerHTML = "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgJSON + "'/>&nbsp;";
        } else if (wew.curFile.endsWith("css")) {
            wew.setLanguage("css");
            document.querySelector("#wew_Filename").innerHTML = "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgCSS + "'/>&nbsp;";
        } else {
            wew.setLanguage("text/plain");
            document.querySelector("#wew_Filename").innerHTML = "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgTXT + "'/>&nbsp;";
        }

        if (window.innerWidth > window.innerHeight) {
            document.querySelector("#wew_Filename").innerHTML += wew.curFile;
        }
    }
};

/**
 * Set language
 * @param {String} language - htmlmixed | javascript | css
 * @returns {void}
 */
wew.setLanguage = (language) => {
    wew.curLanguage = language;
    wew.editor.setOption("mode", {name: language, globalVars: true});
    wew.editor.refresh();
    wew.editor.focus();
};

/**
 * Set Theme
 * @param {String} theme
 * @returns {void}
 */
wew.setTheme = (theme) => {
    let vMenu = wew.viewMenu;
    let vBKb = wew.viewBracketsKeys;
    wew.hideMenu();
    wew.hideBracketsKd();
    wew.showMenu();
    wew.showBracketsKd();

    wew.theme = theme;
    wew.editor.setOption("theme", wew.theme);

    let linesStyle = window.getComputedStyle(document.querySelector("div[class=CodeMirror-gutters]"));
    jsPopupBox.dialog.style.backgroundColor = linesStyle.getPropertyValue("background-color");
    jsPopupBox.dialog.style.color = linesStyle.getPropertyValue("color");

    document.querySelector("body").style.backgroundColor = linesStyle.getPropertyValue("background-color");
    document.querySelector("#wew").style.backgroundColor = linesStyle.getPropertyValue("background-color");
    document.querySelector("#wew_Menu").style.borderTopColor = linesStyle.getPropertyValue("border-right-color");
    document.querySelector("#wew_Menu").style.borderBottomColor = linesStyle.getPropertyValue("border-right-color");
    document.querySelector("#wew_Keys").style.borderTopColor = linesStyle.getPropertyValue("border-right-color");
    document.querySelector("#wew_Keys").style.borderBottomColor = linesStyle.getPropertyValue("border-right-color");
    document.querySelector("#wew_Filename").style.color = linesStyle.getPropertyValue("color");
    document.querySelector("#wew_Filename").style.textShadow = "1px 1px " + linesStyle.getPropertyValue("background-color");

    document.querySelector("head").removeChild(wew.globalStyles);
    wew.globalStyles = document.createElement('style');
    wew.globalStyles.type = 'text/css';
    let css = "";
    css += "a, a:hover, a:visited, a:link, a:active {";
    css += "color:" + linesStyle.getPropertyValue("color") + ";";
    css += "}";
    css += "button,select,input {";
    css += "color:" + linesStyle.getPropertyValue("color") + ";";
    css += "background-color:" + linesStyle.getPropertyValue("background-color") + ";";
    css += "border-color:" + linesStyle.getPropertyValue("border-right-color") + ";";
    css += "}";
    css += "button:active, button:hover{";
    css += "background-color:" + linesStyle.getPropertyValue("border-right-color") + ";";
    css += "}";

    wew.globalStyles.appendChild(document.createTextNode(css));
    document.querySelector("head").appendChild(wew.globalStyles);

    wew.hideMenu();
    wew.hideBracketsKd();
    if (vMenu) {
        wew.showMenu();
    }
    if (vBKb) {
        wew.showBracketsKd();
    }

};

/**
 * show menu
 * @returns {void}
 */
wew.showMenu = () => {
    document.querySelector("#wew_ButtonMenu").style.display = "none";
    wew.panels[wew.menu.id] = wew.editor.addPanel(wew.menu, {position: "top", stable: true});
    wew.viewMenu = true;
    wew.setCurFile(wew.curFile);
    wew.editor.focus();
};
/**
 * hide menu
 * @returns {void}
 */
wew.hideMenu = () => {
    if (wew.panels[wew.menu.id] !== undefined) {
        document.querySelector("#wew_ButtonMenu").style.display = "initial";
        wew.panels[wew.menu.id].clear();
        wew.viewMenu = false;
    }
    wew.editor.focus();
};

/**
 * show bracketsKd
 * @returns {void}
 */
wew.showBracketsKd = () => {
    wew.panels[wew.bracketsKb.id] = wew.editor.addPanel(wew.bracketsKb, {position: "bottom", stable: true});
    wew.viewBracketsKeys = true;
    wew.editor.focus();
};
/**
 * hide bracketsKd
 * @returns {void}
 */
wew.hideBracketsKd = () => {
    if (wew.panels[wew.bracketsKb.id] !== undefined) {
        wew.panels[wew.bracketsKb.id].clear();
        wew.viewBracketsKeys = false;
    }
    wew.editor.focus();
};

/**
 * @author dustinormond
 * @param {CodeMirror} cm
 * @param {boolean} above
 * @returns {void}
 */
wew.duplicateLines = (cm, above) => {
    // get selection or cursor start and end position
    let startPosition = cm.doc.getCursor(true);
    let endPosition = cm.doc.getCursor(false);

    // gets the start cursor position without the beginning tabs
    cm.doc.setCursor(startPosition.line, startPosition.ch);
    CodeMirror.commands.goLineEnd(cm);
    CodeMirror.commands.goLineStartSmart(cm);
    let startCursor = cm.doc.getCursor();
    let start = {"line": startCursor.line, "ch": startCursor.ch};

    // gets the end cursor position
    cm.doc.setCursor(endPosition.line, endPosition.ch);
    CodeMirror.commands.goLineEnd(cm);
    let endCursor = cm.doc.getCursor();
    let end = {"line": endCursor.line, "ch": endCursor.ch};

    // gets the content of the line or selected lines
    let content = cm.doc.getRange(start, end);

    // checks if the code is duplicated above
    if (above) {
        // handles duplication on the first line
        if (startPosition.line === 0) {

            // sets the cursor to the beginning, duplicates the content, then adds a new line
            cm.doc.setCursor(0, 0);
            cm.doc.replaceSelection(content);
            CodeMirror.commands.newlineAndIndent(cm);

            // handles duplication on all other lines
        } else {

            // sets the cursor to the end of the line, adds a new line, then duplicates the content
            cm.doc.setCursor(startPosition.line - 1);
            CodeMirror.commands.goLineEnd(cm);
            CodeMirror.commands.newlineAndIndent(cm);
            cm.doc.replaceSelection(content);
        }

        // adds a new line and duplicates the content below
    } else {
        CodeMirror.commands.newlineAndIndent(cm);
        cm.doc.replaceSelection(content);
    }

    // restores the cursor position if duplicating above
    if (above) {
        cm.doc.setSelection(startPosition, endPosition);

        // restores the cursor position if duplicating one line below
    } else if (endPosition.line === startPosition.line) {
        cm.doc.setCursor(endPosition.line + 1, endPosition.ch);

        // restores the cursor position if duplicating more than one line below
    } else {
        var lineCount = endPosition.line - startPosition.line + 1;
        startPosition.line += lineCount;
        endPosition.line += lineCount;
        cm.doc.setSelection(startPosition, endPosition);
    }
};

/**
 * Move current line up/down
 * @author Matt Pass-2
 * @param {CodeMirror} cm
 * @param {boolean} above
 * @returns {void}
 */
wew.moveLines = (cm, above) => {
    let lineStart, lineEnd, swapLineNo, swapLine;

    // Get start & end lines plus the line we'll swap with
    lineStart = cm.getCursor("start");
    lineEnd = cm.getCursor("end");
    if (above && lineStart.line > 0)
        swapLineNo = lineStart.line - 1;
    if (!above && lineEnd.line < cm.lineCount() - 1)
        swapLineNo = lineEnd.line + 1;

    // If we have a line to swap with
    if (!isNaN(swapLineNo)) {
        // Get the content of the swap line and carry out the swap in a single operation
        swapLine = cm.getLine(swapLineNo);
        cm.operation(function () {
            // Move lines in turn up
            if (above) {
                for (var i = lineStart.line; i <= lineEnd.line; i++) {
                    cm.replaceRange(cm.getLine(i), {line: i - 1, ch: 0}, {line: i - 1, ch: 1000000});
                }
                // ...or down
            } else {
                for (var i = lineEnd.line; i >= lineStart.line; i--) {
                    cm.replaceRange(cm.getLine(i), {line: i + 1, ch: 0}, {line: i + 1, ch: 1000000});
                }
            }
            // Now swap our final line with the swap line to complete the move
            cm.replaceRange(swapLine, {line: above ? lineEnd.line : lineStart.line, ch: 0}, {line: above ? lineEnd.line : lineStart.line, ch: 1000000});
            // Finally set the moved selection
            cm.setSelection(
                    {line: lineStart.line + (above ? -1 : 1), ch: lineStart.ch},
                    {line: lineEnd.line + (above ? -1 : 1), ch: lineEnd.ch}
            );
        });
    }
};

/**
 * On Format Code
 */
wew.formatCode = () => {
    let startSel = wew.editor.getCursor(true);
    let endSel = wew.editor.getCursor(false);

    if (startSel.line === endSel.line && startSel.ch === endSel.ch) {
        wew.editor.setSelection({
            "line": wew.editor.firstLine(),
            "ch": 0,
            "sticky": null
        }, {
            "line": wew.editor.lastLine(),
            "ch": 0,
            "sticky": null
        },
                {scroll: false}
        );
    }
    wew.editor.autoFormatRange(wew.editor.getCursor(true), wew.editor.getCursor(false));
    wew.editor.setSelection({
        "line": startSel.line,
        "ch": startSel.ch
    }, {
        "line": endSel.line,
        "ch": endSel.ch
    },
            {scroll: false}
    );
    wew.editor.focus();
};

/**
 * insert ch into cursor position
 * @param {String} ch
 * @returns {void}
 */
wew.onClickBracketsKb = (ch) => {
    wew.editor.focus();
    let doc = wew.editor.getDoc();
    let cursor = doc.getCursor();
    doc.replaceRange(ch, cursor);
    wew.editor.focus();
};

/**
 * event onChangeLanguage of New file form
 * @param {String} filename
 * @returns {void}
 */
wew.onChangeLanguage = (filename) => {
    document.querySelector("input[name='formNewInputfilename']").value = filename;
};

/**
 * New button click
 * @returns {void}
 */
wew.newHTML = () => {
    var fields = [];
    fields.push({field: "", type: "html", label: "<h1><img src='"+wew.menu.querySelector("#wew_newImg").src+"' class='wew_ImgMenu'/> Nuevo Archivo</h1>"});
    fields.push({field: "filename", type: "text", label: "Nombre del archivo:<br/>", htmlParams: "value=\"index.html\" style=\"text-align:center;\" required"});
    fields.push({field: "language", type: "html", label: "<br/><br/><br/><div style='text-align:left;'>"});
    fields.push({field: "language", type: "radio", label: "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgHTML + "'/>&nbsp;HTML<br/><br/>", htmlParams: "onchange='wew.onChangeLanguage(\"index.html\")' value='htmlmixed' checked"});
    fields.push({field: "language", type: "radio", label: "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgCSS + "'/>&nbsp;CSS<br/><br/>", htmlParams: "onchange='wew.onChangeLanguage(\"style.css\")' value='css'"});
    fields.push({field: "language", type: "radio", label: "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgJS + "'/>&nbsp;Javascript<br/><br/>", htmlParams: "onchange='wew.onChangeLanguage(\"script.js\")' value='javascript'"});
    fields.push({field: "language", type: "radio", label: "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgXML + "'/>&nbsp;XML<br/><br/>", htmlParams: "onchange='wew.onChangeLanguage(\"data.xml\")' value='xml'"});
    fields.push({field: "language", type: "radio", label: "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgJSON + "'/>&nbsp;JSON<br/><br/>", htmlParams: "onchange='wew.onChangeLanguage(\"data.json\")' value='json'"});
    fields.push({field: "language", type: "radio", label: "<img class='wew_ImgMenu' draggable='false' src='" + wew.imgTXT + "'/>&nbsp;Plain text<br/><br/>", htmlParams: "onchange='wew.onChangeLanguage(\"text.txt\")' value='text/plain'"});
    fields.push({field: "language", type: "html", label: "</div>"});
    document.querySelector("#wew").style.display = "none";
    jsPopupBox.form(fields, "formNew").then((t) => {
        t.filename = t.filename.trim();
        let html = "";
        if (t.language === "htmlmixed") {
            html = "<!DOCTYPE html>\n";
            html += "<html>\n";
            html += "    <head>\n";
            html += "        <title>" + t.filename + "</title>\n";
            html += "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n";
            html += "        <meta charset=\"utf-8\"/>\n";
            html += "    </head>\n";
            html += "    <body>\n        \n";
            html += "    </body>\n";
            html += "</html>\n";
        } else if (t.language === "css") {
            html = "/* CSS - " + t.filename + " */\n";
        } else if (t.language === "javascript") {
            html = "/* Javascript - " + t.filename + " */\n";
        } else if (t.language === "xml") {
            html = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
        }
        document.querySelector("#wew").style.display = "block";
        wew.setCurFile(t.filename);
        wew.editor.getDoc().setValue(html);
        wew.editor.refresh();
        wew.editor.focus();
    }).catch(() => {
        document.querySelector("#wew").style.display = "block";
        wew.editor.focus();
    });
};

/**
 * Open button click
 * @returns {void}
 */
wew.openHTML = () => {
    if (document.querySelector("#wew_OpenFile").files.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = () => {
            wew.editor.getDoc().setValue(fileReader.result);
            wew.setCurFile(document.querySelector("#wew_OpenFile").files[0].name);
            document.querySelector("#wew_OpenFile").value = "";
            wew.editor.focus();
        };
        fileReader.readAsText(document.querySelector("#wew_OpenFile").files[0]);
    }
};

/**
 * Save button click
 * @returns {void}
 */
wew.saveHTML = () => {
    document.querySelector("#wew").style.display = "none";
    jsPopupBox.prompt("<h1><img src='"+wew.menu.querySelector("#wew_saveImg").src+"' class='wew_ImgMenu'/> Guardar archivo (Descargar)</h1>File Name", wew.curFile, "text-align:center").then((filename) => {
        wew.setCurFile(filename.trim());
        
        var link = document.createElement("a");
        link.download = wew.curFile === null ? "index.html" : wew.curFile;
        link.href = "data:text/plain," + encodeURIComponent(wew.editor.getDoc().getValue());
        link.click();
        
        document.querySelector("#wew").style.display = "block";
        wew.editor.refresh();
        wew.editor.focus();
    }).catch(() => {
        document.querySelector("#wew").style.display = "block";
        wew.editor.focus();
    });
};

/**
 * Run button click
 * @returns {void}
 */
wew.runHTML = () => {
    let html = wew.editor.getDoc().getValue();
    //Run event onload - BEGIN
    if(html.includes("window.addEventListener(\"load\"")) {
        let runOnload = "";
        runOnload += "<script>";
        runOnload += "window.dispatchEvent(new CustomEvent('load'));";
        runOnload += "<"+"/script>";
        runOnload += "</html>";
        html = html.replace(/<\/\b(html)\b>(?![\s\S]*\b\1\b)/,runOnload);
    } else if(html.includes("window.onload")) {
        let runOnload = "";
        runOnload += "<script>";
        runOnload += "window.onload()";
        runOnload += "<"+"/script>";
        runOnload += "</html>";
        html = html.replace(/<\/\b(html)\b>(?![\s\S]*\b\1\b)/,runOnload);
    }
    //Run event onload - END
    
    var runWindow = window.open();
    runWindow.document.open().write(html);
    wew.editor.focus();
};

/**
 * Open rename dialog
 * @returns {void}
 */
wew.openRenameDialog = () => {
    document.querySelector("#wew").style.display = "none";
    jsPopupBox.prompt("<h1><img src='"+wew.menu.querySelector("#wew_newImg").src+"' class='wew_ImgMenu'/> Renombrar archivo</h1>Nuevo nombre del archivo:", wew.curFile, "text-align:center").then((filename) => {
        document.querySelector("#wew").style.display = "block";
        wew.setCurFile(filename.trim());
        wew.editor.refresh();
        wew.editor.focus();
    }).catch(() => {
        document.querySelector("#wew").style.display = "block";
        wew.editor.focus();
    });
};

/**
 * Open about dialog
 * @returns {void}
 */
wew.openAboutDialog = () => {
    let message = "";
    message += "<h1><img src='" + document.querySelector("link[rel='shortcut icon']").href + "' alt='' draggable='false'>";
    message += "&nbsp;Web Editor Web</h1>";
    message += "<p>Bajo licencia pública general de GNU.</p>";
    message += "<h2>Versión:1.4 ";
    message += "<h4>Desarrollado el 26-05-2021</h4>";
    message += "<h4>Modificado para mantenimiento el 08-02-2023</h4>";
    message += "<p>(c) Copyright 2020~2021 <b>Marcos Morise</b>. Todos los derechos reservados.</p>";
    message += "<p><b>SoLUC.org</b> - Software Libre, uniendo conocimientos.</p>";
    message += "<p>Sitio Web Oficial: <a href='http://soluc.org' target='blank'>http://soluc.org</a><br/>";
    message += "Contacto: <a href='mailto:org.soluc@gmail.com' target='blank'/>org.soluc@gmail.com</a></p>";
    message += "<p>Íconos por: <b>gnome-look.org & icons-icon.com</b> Bajo licencia pública general de GNU.<br/>";
    message += "API del editor de código desarrollada por <b>CodeMirror</b> bajo licencia de MIT</p>";
    message += "<br/>";
    message += "<b>Si desea colaborar donando puede hacerlo en:</b>";
    message += "<h2>org.soluc@gmail.com</h2>";
    message += "<img height='24' src='data:image/png;base64,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' alt='' draggable='false'/>&nbsp;&nbsp;";
    message += "<a href='https://www.paypal.com/donate?hosted_button_id=LLNW5SEVJ3V72' target='blank'>";
    message += "<img height='24' src='data:image/png;base64,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' alt='' draggable='false'/>";
    message += "</a><br/><br/>";
    document.querySelector("#wew").style.display = "none";
    jsPopupBox.alert(message).then(() => {
        document.querySelector("#wew").style.display = "block";
        wew.editor.focus();
    });
};

/**
 * Open help dialog
 * @returns {void}
 */
wew.openHelpDialog = () => {
    let message = "";
    message += "<h1><img src='"+wew.menu.querySelector("#wew_helpImg").src+"' class='wew_ImgMenu'/> Ayuda</h1>";
    message += "<h2>Atajos que puede utilizar</h2>";
    message += "<table cellspacing='10'>";
    message += "<tr><td align='right'><b>Ctrl + Alt + N</b><td align='left'>Nuevo archivo";
    message += "<tr><td align='right'><b>Ctrl + O</b><td align='left'>Abrir/Cargar archivo en el editor";
    message += "<tr><td align='right'><b>Ctrl + S</b><td align='left'>Guardar/Descargar archivo";
    message += "<tr><td align='right'><td align='left'>";
    message += "<tr><td align='right'><b>F1</b><td align='left'>Abrir esta ventana de ayuda";
    message += "<tr><td align='right'><b>F2</b><td align='left'>Renombrar el archivo actual";
    message += "<tr><td align='right'><b>F3</b><td align='left'>Buscar";
    message += "<tr><td align='right'><b>F9</b><td align='left'>Ejecutar archivo actual HTML";
    message += "<tr><td align='right'><b>F8</b><td align='left'>Configuración";
    message += "<tr><td align='right'><b>F10</b><td align='left'>Mostrar/Ocultar menú";
    message += "<tr><td align='right'><td align='left'>";
    message += "<tr><td align='right'><b>Ctrl + F</b><td align='left'>Encontrar en archivo";
    message += "<tr><td align='right'><b>Ctrl + Shift + F</b><td align='left'>Encontrar y reemplazar en archivo";
    message += "<tr><td align='right'><td align='left'>";
    message += "<tr><td align='right'><b>Tab</b><td align='left'> Aplicar sangría a la(s) línea(s) actual(es)/seleccionada(s)";
    message += "<tr><td align='right'><b>Shift + Tab</b><td align='left'> Menos sangrías a la(s) línea(s) actual/seleccionada(s)";
    message += "<tr><td align='right'><b>Ctrl + Q</b><td align='left'>Despliegues de código";
    message += "<tr><td align='right'><b>Ctrl + Space</b><td align='left'>Autocompletar";
    message += "<tr><td align='right'><b>Alt + Shift + F</b><td align='left'>Formatear documento";
    message += "<tr><td align='right'><td align='left'>";
    message += "<tr><td align='right'><b>Ctrl + Shift + Up</b><td align='left'>Duplicar la(s) línea(s) actual(es)/seleccionada(s) arriba";
    message += "<tr><td align='right'><b>Ctrl + Shift + Down</b><td align='left'>Duplicar la(s) línea(s) actual(es)/seleccionada(s) a continuación";
    message += "<tr><td align='right'><b>Alt + Shift + Up</b><td align='left'>Mover la(s) línea(s) actual(es)/seleccionada(s) arriba";
    message += "<tr><td align='right'><b>Alt + Shift + Down</b><td align='left'>Mover la(s) línea(s) actual(es)/seleccionada(s) debajo";
    message += "</table><br/>";
    document.querySelector("#wew").style.display = "none";
    jsPopupBox.alert(message).then(() => {
        document.querySelector("#wew").style.display = "block";
        wew.editor.focus();
    });
};

/**
 * Open config dialog
 * @returns {void}
 */
wew.openConfigDialog = () => {
    var fields = [];
    fields.push({field: "", type: "html", label: "<h1><img src='"+wew.menu.querySelector("#wew_configImg").src+"' class='wew_ImgMenu'/> Configuración</h1>"});
    fields.push({field: "theme", type: "select", label: "Color de Tema del editor:<br/>"});
    fields.push({field: "theme", type: "option", label: "WEW - Light", htmlParams: "value='default' " + (wew.theme === "default" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "WEW - Dark", htmlParams: "value='ambiance' " + (wew.theme === "ambiance" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "3024-day", htmlParams: "value='3024-day' " + (wew.theme === "3024-day" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "3024-night", htmlParams: "value='3024-night' " + (wew.theme === "3024-night" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "abcdef", htmlParams: "value='abcdef' " + (wew.theme === "abcdef" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "ambiance-mobile", htmlParams: "value='ambiance-mobile' " + (wew.theme === "ambiance-mobile" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "base16-dark", htmlParams: "value='base16-dark' " + (wew.theme === "base16-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "base16-light", htmlParams: "value='base16-light' " + (wew.theme === "base16-light" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "bespin", htmlParams: "value='bespin' " + (wew.theme === "bespin" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "blackboard", htmlParams: "value='blackboard' " + (wew.theme === "blackboard" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "cobalt", htmlParams: "value='cobalt' " + (wew.theme === "cobalt" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "colorforth", htmlParams: "value='colorforth' " + (wew.theme === "colorforth" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "darcula", htmlParams: "value='darcula' " + (wew.theme === "darcula" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "dracula", htmlParams: "value='dracula' " + (wew.theme === "dracula" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "duotone-dark", htmlParams: "value='duotone-dark' " + (wew.theme === "duotone-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "duotone-light", htmlParams: "value='duotone-light' " + (wew.theme === "duotone-light" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "eclipse", htmlParams: "value='eclipse' " + (wew.theme === "eclipse" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "elegant", htmlParams: "value='elegant' " + (wew.theme === "elegant" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "erlang-dark", htmlParams: "value='erlang-dark' " + (wew.theme === "erlang-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "gruvbox-dark", htmlParams: "value='gruvbox-dark' " + (wew.theme === "gruvbox-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "hopscotch", htmlParams: "value='hopscotch' " + (wew.theme === "hopscotch" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "icecoder", htmlParams: "value='icecoder' " + (wew.theme === "icecoder" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "idea", htmlParams: "value='idea' " + (wew.theme === "idea" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "isotope", htmlParams: "value='isotope' " + (wew.theme === "isotope" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "lesser-dark", htmlParams: "value='lesser-dark' " + (wew.theme === "lesser-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "liquibyte", htmlParams: "value='liquibyte' " + (wew.theme === "liquibyte" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "lucario", htmlParams: "value='lucario' " + (wew.theme === "lucario" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "material", htmlParams: "value='material' " + (wew.theme === "material" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "mbo", htmlParams: "value='mbo' " + (wew.theme === "mbo" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "mdn-like", htmlParams: "value='mdn-like' " + (wew.theme === "mdn-like" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "midnight", htmlParams: "value='midnight' " + (wew.theme === "midnight" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "monokai", htmlParams: "value='monokai' " + (wew.theme === "monokai" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "neat", htmlParams: "value='neat' " + (wew.theme === "neat" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "neo", htmlParams: "value='neo' " + (wew.theme === "neo" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "night", htmlParams: "value='night' " + (wew.theme === "night" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "nord", htmlParams: "value='nord' " + (wew.theme === "nord" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "oceanic-next", htmlParams: "value='oceanic-next' " + (wew.theme === "oceanic-next" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "panda-syntax", htmlParams: "value='panda-syntax' " + (wew.theme === "panda-syntax" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "paraiso-dark", htmlParams: "value='paraiso-dark' " + (wew.theme === "paraiso-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "paraiso-light", htmlParams: "value='paraiso-light' " + (wew.theme === "paraiso-light" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "pastel-on-dark", htmlParams: "value='pastel-on-dark' " + (wew.theme === "pastel-on-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "railscasts", htmlParams: "value='railscasts' " + (wew.theme === "railscasts" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "rubyblue", htmlParams: "value='rubyblue' " + (wew.theme === "rubyblue" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "seti", htmlParams: "value='seti' " + (wew.theme === "seti" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "shadowfox", htmlParams: "value='shadowfox' " + (wew.theme === "shadowfox" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "solarized", htmlParams: "value='solarized' " + (wew.theme === "solarized" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "ssms", htmlParams: "value='ssms' " + (wew.theme === "ssms" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "the-matrix", htmlParams: "value='the-matrix' " + (wew.theme === "the-matrix" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "tomorrow-night-bright", htmlParams: "value='tomorrow-night-bright' " + (wew.theme === "tomorrow-night-bright" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "tomorrow-night-eighties", htmlParams: "value='tomorrow-night-eighties' " + (wew.theme === "tomorrow-night-eighties" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "ttcn", htmlParams: "value='ttcn' " + (wew.theme === "ttcn" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "twilight", htmlParams: "value='twilight' " + (wew.theme === "twilight" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "vibrant-ink", htmlParams: "value='vibrant-ink' " + (wew.theme === "vibrant-ink" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "xq-dark", htmlParams: "value='xq-dark' " + (wew.theme === "xq-dark" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "xq-light", htmlParams: "value='xq-light' " + (wew.theme === "xq-light" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "yeti", htmlParams: "value='yeti' " + (wew.theme === "yeti" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "yonce", htmlParams: "value='yonce' " + (wew.theme === "yonce" ? "selected" : "")});
    fields.push({field: "theme", type: "option", label: "zenburn", htmlParams: "value='zenburn' " + (wew.theme === "zenburn" ? "selected" : "")});

    fields.push({field: "fontSize", type: "number", label: "<br/><br/>Tamaño de la fuente:<br/>", htmlParams: "value=" + wew.fontSize + " min=1 step=0.5 required style=\"width:30%; text-align:center;\""});
    fields.push({field: "fontUnit", type: "select", label: "&nbsp;"});
    fields.push({field: "fontUnit", type: "option", label: "px", htmlParams: "value='px' " + (wew.fontUnit === "px" ? "selected" : "")});
    fields.push({field: "fontUnit", type: "option", label: "vw", htmlParams: "value='vw' " + (wew.fontUnit === "vw" ? "selected" : "")});
    fields.push({field: "fontUnit", type: "option", label: "vh", htmlParams: "value='vh' " + (wew.fontUnit === "vh" ? "selected" : "")});
    fields.push({field: "fontUnit", type: "option", label: "rem", htmlParams: "value='rem' " + (wew.fontUnit === "rem" ? "selected" : "")});

    fields.push({field: "", type: "html", label: "<br/><br/>"});
    fields.push({field: "viewBracketsKeys", type: "checkbox", label: "<big>Mostrar <b>comillas</b> y <b>corchetes</b> del teclado</big><br/><br/>", htmlParams: wew.viewBracketsKeys ? "checked" : ""});
    fields.push({field: "autoCloseBrackets", type: "checkbox", label: "<big>Cierre automático de <b>corchetes</b></big><br/><br/>", htmlParams: wew.autoCloseBrackets ? "checked" : ""});
    fields.push({field: "autoCloseTags", type: "checkbox", label: "<big>Cierre automático de <b>etiquetas</b></big>", htmlParams: wew.autoCloseTags ? "checked" : ""});

    fields.push({field: "", type: "html", label: "<br/><br/>"});

    document.querySelector("#wew").style.display = "none";
    jsPopupBox.form(fields).then((t) => {
        document.querySelector("#wew").style.display = "block";
        wew.fontSize = t.fontSize;
        wew.fontUnit = t.fontUnit;
        wew.editor.getWrapperElement().style["font-size"] = wew.fontSize + wew.fontUnit;

        wew.viewBracketsKeys = t.viewBracketsKeys;
        wew.autoCloseBrackets = t.autoCloseBrackets;
        wew.autoCloseTags = t.autoCloseTags;
        wew.editor.setOption("autoCloseBrackets", wew.autoCloseBrackets);
        wew.editor.setOption("autoCloseTags", wew.autoCloseTags);

        wew.setTheme(t.theme);

        wew.editor.refresh();
        wew.editor.focus();
    }).catch(() => {
        document.querySelector("#wew").style.display = "block";
        wew.editor.focus();
    });
};

//******************************************************************************
// window events
//******************************************************************************

window.addEventListener("resize", () => {
    wew.setCurFile(wew.curFile);
    wew.editor.setSize(window.innerWidth + "px", window.innerHeight + "px");
});

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
});

window.addEventListener("load", () => {
    /**********************/
    /* WEW Config - BEGIN */

    wew.autoCloseBrackets = true;
    wew.autoCloseTags = true;

    wew.fontSize = 1.5;
    wew.fontUnit = "rem";

    wew.viewMenu = true;
    wew.viewBracketsKeys = false;

    wew.theme = "default"; //wew light
    //wew.theme = "ambiance"; //wew dark

    /* WEW Config - END */
    /********************/

    /*****************************/
    /* WEW Start - DO NOT MODIFY */
    wew.init(); /* DO NOT MODIFY */
    /* WEW Start - DO NOT MODIFY */
    /*****************************/
});
