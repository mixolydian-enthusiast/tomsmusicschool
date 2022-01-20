//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "../audio/archie-leitmotif-canon-at-the-octave.mp3";
offset_js = 0.00;
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":0,"nocsr":false,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":true,"ctrmed":0,"ctrnot":0,"lncsr":true,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":false,"metro":0,"btime":-1,"etime":0,"offrol":0,"dotted":0};
lpRec = {"loopBtn":1,"loopStart":0,"loopEnd":38};
times_arr = [[0.00,2.00,4.00,6.00,8.00,10.00,12.00,14.00,16.00,18.00],
[18.00,20.00,22.00,24.00,26.00,28.00,30.00,32.00,34.00,36.00,38.00]];
abc_arr = ["X:1",
"T:Archie leitmotif - canon at the octave",
"C:Tom Grooves",
"%%measurenb 0",
"%%scale 0.83",
"%%pagewidth 21.59cm",
"%%leftmargin 1.50cm",
"%%rightmargin 1.50cm",
"%%score { 1 | 2 }",
"L:1/8",
"Q:1/4=120",
"M:4/4",
"I:linebreak $",
"K:F",
"V:1 treble nm=\"Piano\" snm=\"Pno.\"",
"V:2 bass ",
"V:1",
" FEFA c2 F2 | G2 B2 C2 DE | FG A2 BGAc | BAdc BABc |$ AGFE D2 F2 | E2 F2 G2 EG | F2 A2 Bcdc | %7",
" BGAF GA TB2 |$ ABce d2 B2 | G2 c2 B2 AG | F2 A2 BGDF | EGBG ABcB |$ ABce d2 B2 | c2 G2 C2 E2 | %14",
" F2 A2 BGDF | EFGA BGcG | A2 F2 GEFA |$ G^FGB d2 B2 | A4 z4 |] %19",
"V:2",
" z8 | z8 | F,E,F,A, C2 F,2 | G,2 B,2 C,2 D,E, |$ F,G, A,2 B,G,A,C | B,A,DC B,A,B,C | %6",
" A,G,F,E, D,2 F,2 | E,2 F,2 G,2 E,G, |$ F,2 A,2 B,CDC | B,G,A,F, G,A, TB,2 | A,B,CE D2 B,2 | %11",
" G,2 C2 B,2 A,G, |$ F,2 A,2 B,G,D,F, | E,G,B,G, A,B,CB, | A,B,CE D2 B,2 | C2 G,2 C,2 E,2 | %16",
" F,E,F,A, C2 F,2 |$ G,2 B,2 C,2 D,E, | F,4 z4 |] %19",
""];
abc_enc = [];
