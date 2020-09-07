!(function (root, factory) {
	'object' === typeof exports && 'undefined' !== typeof module ? factory(exports) : 'function' == typeof define && define.amd ? define(['exports'], factory) : factory(((root = root || self).xtermStyle = {}))
})(this, function (e) {
	'use strict'
	var style = {
		foreground: '#ebeef5',
		background: '#1d2935',
		cursor: '#e6a23c',
		black: '#000000',
		brightBlack: '#555555',
		red: '#ef4f4f',
		brightRed: '#ef4f4f',
		green: '#67c23a',
		brightGreen: '#67c23a',
		yellow: '#e6a23c',
		brightYellow: '#e6a23c',
		blue: '#409eff',
		brightBlue: '#409eff',
		magenta: '#ef4f4f',
		brightMagenta: '#ef4f4f',
		cyan: '#17c0ae',
		brightCyan: '#17c0ae',
		white: '#bbbbbb',
		brightWhite: '#ffffff'
	}
	e.default = style
	Object.defineProperty(e, '__esModule', {
		value: !0
	})
})
