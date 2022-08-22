import React from "react";
import { FlowchartProps, IFlowchart } from "./schema";
import "./index.css";
import "./output.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "m-react-splitters/lib/splitters.css";
declare const Flowchart: React.ForwardRefExoticComponent<FlowchartProps & React.RefAttributes<IFlowchart>>;
export default Flowchart;
