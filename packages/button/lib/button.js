"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (props) {
    var children = props.children, style = props.style, label = props.label;
    return (react_1["default"].createElement("button", { type: "button", className: "px-10 py-4 bg-purple-600 text-white rounded-2xl", style: style }, label || children));
};
exports.Button = Button;
exports["default"] = Button;
