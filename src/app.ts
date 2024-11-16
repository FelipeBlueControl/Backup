import * as React from 'react';
import { Application } from '@nativescript/core';
import { start } from 'react-nativescript';
import { MainScreen } from './components/MainScreen';

declare global {
    interface GlobalThis {
        __DEV__: boolean;
    }
}

globalThis.__DEV__ = false;

start(React.createElement(MainScreen, {}, null));