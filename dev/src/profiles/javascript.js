/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
The javascript profile disables a large number of features.
*/

let y=true, n=false;
function testFlag(flag) { try { new RegExp(".",flag); } catch (e) { return n; } }
let unicodeFlag = testFlag("u");
let stickyFlag = testFlag("y");

let javascript = {
	id: "js",
	label: "JavaScript",
	browser: true,
	
	flags: {
		"s": n,
		"x": n,
		"u": unicodeFlag,
		"y": stickyFlag,
		"U": n
	},

	escCharCodes: {
		"a": n, // bell
		"e": n  // escape
	},

	escCharTypes: {
		"A": n, // bos
		"G": n, // prevmatchend
		"h": n, // hwhitespace
		"H": n, // nothwhitespace
		"K": n, // keepout
		"N": n, // notlinebreak
		"R": n, // newline
		"v": n, // vwhitespace
		"V": n, // notvwhitespace
		"X": n, // unicodegrapheme
		"Z": n, // eos
		"z": n  // abseos
	},

	unicodeScripts: n,

	unicodeCategories: n,

	posixCharClasses: n,

	modes: n,

	tokens: {
		// classes:
		// also in escCharSpecials and specialChars
		"unicodecat": n, // \p{Ll} \P{^Ll} \pL
		"notunicodecat": n, // \P{Ll} \p{^Ll} \PL
		"unicodescript": n, // \p{Cherokee} \P{^Cherokee}
		"notunicodescript": n, // \P{Cherokee} \p{^Cherokee}
		"posixcharclass": n, // [[:alpha:]]

		// esc:
		// also in escCharCodes and escCharSpecials
		"escunicodeub": unicodeFlag, // \u{00A9}
		"escunicodexb": n, // \x{00A9}
		"escsequence": n, // \Q...\E
		"escoctalo": n, // \o{377}

		// group:
		"namedgroup": n, // (?P<name>foo) (?<name>foo) (?'name'foo)
		"atomic": n, // (?>foo|bar)
		"define": n, // (?(DEFINE)foo)
		"branchreset": n, // (?|(a)|(b))

		// lookaround:
		"poslookbehind" : n, // (?<=foo)
		"neglookbehind": n, // (?<!foo)

		// ref:
		"namedref": n, // \k<name> \k'name' \k{name} (?P=name)  \g{name}
		"extnumref": n, // \g{-1} \g{+1} \g{1} \g1 \g-1
		"recursion": n, // (?R) (?0) \g<0> \g'0'
		"numsubroutine": n, // \g<1> \g'-1' (?1) (?-1)
		"namedsubroutine": n, // \g<name> \g'name' (?&name) (?P>name)

		// quantifiers:
		// also in specialChars
		"possessive": n,

		// special:
		"conditional": n, // (?(?=if)then|else)
		"conditionalif": n, // (?=if) any lookaround
		"conditionalelse": n, // |
		"conditionalgroup": n, // (?(1)a|b) (?(-1)a|b) (?(name)a|b)
		"mode": n, // (?i-x) see modes above
		"comment": n // (?#comment)
	},

	config: {
		"forwardref": n, // \1(a)
		"nestedref": n, // (\1a|b)+
		"ctrlcodeerr": n // does \c error, or decompose?
	},
	
	substTokens: {
		"subst_0match": n, // $0 \0 \{0}
		"subst_$bgroup": n, // ${1} ${99}
		"subst_bsgroup": n // \1 \99
	},
	
	docs: {
		"subst_group": {ext:""} // remove other syntaxes.
	}
};

export default javascript;
