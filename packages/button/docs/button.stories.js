"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.primary = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../lib/button");
exports["default"] = { title: 'Button' };
var primary = function () { return react_1["default"].createElement(button_1.Button, { label: "Button" }); };
exports.primary = primary;
