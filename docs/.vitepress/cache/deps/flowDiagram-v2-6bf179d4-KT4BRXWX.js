import {
  flowRendererV2,
  flowStyles
} from "./chunk-DE24WIP7.js";
import {
  flowDb,
  parser$1
} from "./chunk-GH6Q3W32.js";
import "./chunk-KNWLNZ42.js";
import "./chunk-XBA2QTX2.js";
import "./chunk-FWNFS5MY.js";
import "./chunk-J54YYUWT.js";
import "./chunk-5IJJGMBM.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-EUET7JRR.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/mermaid/dist/flowDiagram-v2-6bf179d4.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-6bf179d4-KT4BRXWX.js.map
