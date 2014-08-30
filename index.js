const self = require('sdk/self');
const { Panel } = require("dev/panel");
const { Tool } = require("dev/toolbox");
const { Class } = require("sdk/core/heritage");

const myPanel = Class({
  extends: Panel,
  label: "Devtools Extension Template",
  tooltip: "Devtools Extension Template",
  icon: "./icon.png",
  url: "./pane.html",
  setup: function({debuggee}) {
    this.debuggee = debuggee;
  },
  dispose: function() {
    this.debuggee = null;
  },
  onReady: function() {
    console.log("panel document is interactive");
    this.debuggee.start();
    this.postMessage("RDP", [this.debuggee]);
  },
  onLoad: function() {
    console.log("panel document is fully loaded");
  }
});

exports.myPanel = myPanel;

const myTool = new Tool({
  panels: {
    repl: myPanel
  }
});

console.log("pane document is at", self.data.url('pane.html'));
