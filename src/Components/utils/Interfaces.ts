import React from "react";

export interface IColumn {
    title: string,
    children?: React.ReactNode
}

export interface IItem {
    checkbox: boolean,
    label: string,
    index: number,
    onChange?: (e : any) => void
}

export interface IInput {
    setDescription: (e : string) => void
}

export interface IListIem{
    index: number,
    description: string
}