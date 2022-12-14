import React, { CSSProperties } from "react";
export interface NodeData {
    id: number;
    title: string | (() => string);
    type: NodeType;
    x: number;
    y: number;
    payload?: {
        [key: string]: unknown;
    };
    width?: number;
    height?: number;
}
export interface listData {
    projectName: string | (() => string);
    Sub1: Array<NodeData>;
    Sub2: Array<NodeData>;
}
export interface ConnectionData {
    type: "success" | "fail";
    source: {
        id: number;
        position: ConnectorPosition;
    };
    destination: {
        id: number;
        position: ConnectorPosition;
    };
}
export interface Point {
    x: number;
    y: number;
}
export declare type Line = [Point, Point];
export interface SelectingInfo {
    start: Point;
    end: Point;
}
export interface projectScheme {
    ProjectName: string;
    Subs: Array<SubsScheme>;
}
export interface SubsScheme {
    SubName: string;
    SubData: Array<NodeData> | null;
}
export declare type ConnectorPosition = "left" | "right" | "top" | "bottom";
export declare type NodeType = "start" | "end" | "operation" | "decision" | "collector";
export interface FlowchartProps {
    style?: CSSProperties;
    nodes: NodeData[];
    connections: ConnectionData[];
    onNodeDoubleClick?: (data: NodeData) => void;
    onChange?: (nodes: NodeData[], connections: ConnectionData[]) => void;
    onConnectionDoubleClick?: (data: ConnectionData) => void;
    onDoubleClick?: ((event: React.MouseEvent<SVGSVGElement>, zoom: number) => void) | undefined;
    onMouseUp?: ((event: React.MouseEvent<SVGSVGElement>, zoom: number) => void) | undefined;
    readonly?: boolean;
    defaultNodeSize?: {
        width: number;
        height: number;
    };
    showToolbar?: boolean;
}
export interface DragMovingInfo {
    targetIds: number[];
    deltas: {
        x: number;
        y: number;
    }[];
    moved?: true;
}
export interface DragCreatingInfo {
    data: NodeData;
    type: NodeType;
    x: number;
    y: number;
}
export interface DragConnectingInfo {
    source: NodeData;
    sourcePosition: ConnectorPosition;
}
export interface IFlowchart {
    getData: () => {
        nodes: NodeData[];
        connections: ConnectionData[];
    };
}
export interface DragResizingInfo {
    targetId: number;
    direction: Direction;
}
export declare type Direction = "l" | "r" | "u" | "d" | "lu" | "ru" | "ld" | "rd";
