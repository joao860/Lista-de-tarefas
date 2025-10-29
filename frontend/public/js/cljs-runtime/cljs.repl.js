goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19513){
var map__19514 = p__19513;
var map__19514__$1 = cljs.core.__destructure_map(map__19514);
var m = map__19514__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19520_19795 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19521_19796 = null;
var count__19522_19797 = (0);
var i__19523_19798 = (0);
while(true){
if((i__19523_19798 < count__19522_19797)){
var f_19799 = chunk__19521_19796.cljs$core$IIndexed$_nth$arity$2(null,i__19523_19798);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19799], 0));


var G__19800 = seq__19520_19795;
var G__19801 = chunk__19521_19796;
var G__19802 = count__19522_19797;
var G__19803 = (i__19523_19798 + (1));
seq__19520_19795 = G__19800;
chunk__19521_19796 = G__19801;
count__19522_19797 = G__19802;
i__19523_19798 = G__19803;
continue;
} else {
var temp__5823__auto___19804 = cljs.core.seq(seq__19520_19795);
if(temp__5823__auto___19804){
var seq__19520_19805__$1 = temp__5823__auto___19804;
if(cljs.core.chunked_seq_QMARK_(seq__19520_19805__$1)){
var c__5548__auto___19806 = cljs.core.chunk_first(seq__19520_19805__$1);
var G__19807 = cljs.core.chunk_rest(seq__19520_19805__$1);
var G__19808 = c__5548__auto___19806;
var G__19809 = cljs.core.count(c__5548__auto___19806);
var G__19810 = (0);
seq__19520_19795 = G__19807;
chunk__19521_19796 = G__19808;
count__19522_19797 = G__19809;
i__19523_19798 = G__19810;
continue;
} else {
var f_19811 = cljs.core.first(seq__19520_19805__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19811], 0));


var G__19812 = cljs.core.next(seq__19520_19805__$1);
var G__19813 = null;
var G__19814 = (0);
var G__19815 = (0);
seq__19520_19795 = G__19812;
chunk__19521_19796 = G__19813;
count__19522_19797 = G__19814;
i__19523_19798 = G__19815;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19816 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19816], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19816)))?cljs.core.second(arglists_19816):arglists_19816)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19536_19817 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19537_19818 = null;
var count__19538_19819 = (0);
var i__19539_19820 = (0);
while(true){
if((i__19539_19820 < count__19538_19819)){
var vec__19556_19821 = chunk__19537_19818.cljs$core$IIndexed$_nth$arity$2(null,i__19539_19820);
var name_19822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19556_19821,(0),null);
var map__19559_19823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19556_19821,(1),null);
var map__19559_19824__$1 = cljs.core.__destructure_map(map__19559_19823);
var doc_19825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19559_19824__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19559_19824__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19822], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19826], 0));

if(cljs.core.truth_(doc_19825)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19825], 0));
} else {
}


var G__19827 = seq__19536_19817;
var G__19828 = chunk__19537_19818;
var G__19829 = count__19538_19819;
var G__19830 = (i__19539_19820 + (1));
seq__19536_19817 = G__19827;
chunk__19537_19818 = G__19828;
count__19538_19819 = G__19829;
i__19539_19820 = G__19830;
continue;
} else {
var temp__5823__auto___19831 = cljs.core.seq(seq__19536_19817);
if(temp__5823__auto___19831){
var seq__19536_19832__$1 = temp__5823__auto___19831;
if(cljs.core.chunked_seq_QMARK_(seq__19536_19832__$1)){
var c__5548__auto___19833 = cljs.core.chunk_first(seq__19536_19832__$1);
var G__19834 = cljs.core.chunk_rest(seq__19536_19832__$1);
var G__19835 = c__5548__auto___19833;
var G__19836 = cljs.core.count(c__5548__auto___19833);
var G__19837 = (0);
seq__19536_19817 = G__19834;
chunk__19537_19818 = G__19835;
count__19538_19819 = G__19836;
i__19539_19820 = G__19837;
continue;
} else {
var vec__19563_19841 = cljs.core.first(seq__19536_19832__$1);
var name_19842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19563_19841,(0),null);
var map__19566_19843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19563_19841,(1),null);
var map__19566_19844__$1 = cljs.core.__destructure_map(map__19566_19843);
var doc_19845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19566_19844__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19566_19844__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19842], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19846], 0));

if(cljs.core.truth_(doc_19845)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19845], 0));
} else {
}


var G__19847 = cljs.core.next(seq__19536_19832__$1);
var G__19848 = null;
var G__19849 = (0);
var G__19850 = (0);
seq__19536_19817 = G__19847;
chunk__19537_19818 = G__19848;
count__19538_19819 = G__19849;
i__19539_19820 = G__19850;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19567 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19568 = null;
var count__19569 = (0);
var i__19570 = (0);
while(true){
if((i__19570 < count__19569)){
var role = chunk__19568.cljs$core$IIndexed$_nth$arity$2(null,i__19570);
var temp__5823__auto___19857__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19857__$1)){
var spec_19858 = temp__5823__auto___19857__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19858)], 0));
} else {
}


var G__19859 = seq__19567;
var G__19860 = chunk__19568;
var G__19861 = count__19569;
var G__19862 = (i__19570 + (1));
seq__19567 = G__19859;
chunk__19568 = G__19860;
count__19569 = G__19861;
i__19570 = G__19862;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__19567);
if(temp__5823__auto____$1){
var seq__19567__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19567__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__19567__$1);
var G__19863 = cljs.core.chunk_rest(seq__19567__$1);
var G__19864 = c__5548__auto__;
var G__19865 = cljs.core.count(c__5548__auto__);
var G__19866 = (0);
seq__19567 = G__19863;
chunk__19568 = G__19864;
count__19569 = G__19865;
i__19570 = G__19866;
continue;
} else {
var role = cljs.core.first(seq__19567__$1);
var temp__5823__auto___19867__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19867__$2)){
var spec_19870 = temp__5823__auto___19867__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19870)], 0));
} else {
}


var G__19873 = cljs.core.next(seq__19567__$1);
var G__19874 = null;
var G__19875 = (0);
var G__19876 = (0);
seq__19567 = G__19873;
chunk__19568 = G__19874;
count__19569 = G__19875;
i__19570 = G__19876;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19607 = datafied_throwable;
var map__19607__$1 = cljs.core.__destructure_map(map__19607);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19607__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19607__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19607__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19608 = cljs.core.last(via);
var map__19608__$1 = cljs.core.__destructure_map(map__19608);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19608__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19608__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19608__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19609 = data;
var map__19609__$1 = cljs.core.__destructure_map(map__19609);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19609__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19609__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19609__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19610 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19610__$1 = cljs.core.__destructure_map(map__19610);
var top_data = map__19610__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19610__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19621 = phase;
var G__19621__$1 = (((G__19621 instanceof cljs.core.Keyword))?G__19621.fqn:null);
switch (G__19621__$1) {
case "read-source":
var map__19648 = data;
var map__19648__$1 = cljs.core.__destructure_map(map__19648);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19648__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19648__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19649 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19649__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19649,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19649);
var G__19649__$2 = (cljs.core.truth_((function (){var fexpr__19650 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19650.cljs$core$IFn$_invoke$arity$1 ? fexpr__19650.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19650.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19649__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19649__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19649__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19651 = top_data;
var G__19651__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19651,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19651);
var G__19651__$2 = (cljs.core.truth_((function (){var fexpr__19653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19653.cljs$core$IFn$_invoke$arity$1 ? fexpr__19653.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19653.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19651__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19651__$1);
var G__19651__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19651__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19651__$2);
var G__19651__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19651__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19651__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19651__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19651__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19665 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19665,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19665,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19665,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19665,(3),null);
var G__19668 = top_data;
var G__19668__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19668,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19668);
var G__19668__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19668__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19668__$1);
var G__19668__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19668__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19668__$2);
var G__19668__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19668__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19668__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19668__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19668__$4;
}

break;
case "execution":
var vec__19690 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19592_SHARP_){
var or__5025__auto__ = (p1__19592_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__19697 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19697.cljs$core$IFn$_invoke$arity$1 ? fexpr__19697.cljs$core$IFn$_invoke$arity$1(p1__19592_SHARP_) : fexpr__19697.call(null,p1__19592_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__19703 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19703__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19703,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19703);
var G__19703__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19703__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19703__$1);
var G__19703__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19703__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19703__$2);
var G__19703__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19703__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19703__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19703__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19703__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19621__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19749){
var map__19750 = p__19749;
var map__19750__$1 = cljs.core.__destructure_map(map__19750);
var triage_data = map__19750__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19750__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19752 = phase;
var G__19752__$1 = (((G__19752 instanceof cljs.core.Keyword))?G__19752.fqn:null);
switch (G__19752__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19758 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19759 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19760 = loc;
var G__19761 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19762_19889 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19763_19890 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19764_19891 = true;
var _STAR_print_fn_STAR__temp_val__19765_19892 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19764_19891);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19765_19892);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19747_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19747_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19763_19890);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19762_19889);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19758,G__19759,G__19760,G__19761) : format.call(null,G__19758,G__19759,G__19760,G__19761));

break;
case "macroexpansion":
var G__19766 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19767 = cause_type;
var G__19768 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19769 = loc;
var G__19770 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19766,G__19767,G__19768,G__19769,G__19770) : format.call(null,G__19766,G__19767,G__19768,G__19769,G__19770));

break;
case "compile-syntax-check":
var G__19771 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19772 = cause_type;
var G__19773 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19774 = loc;
var G__19775 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19771,G__19772,G__19773,G__19774,G__19775) : format.call(null,G__19771,G__19772,G__19773,G__19774,G__19775));

break;
case "compilation":
var G__19776 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19777 = cause_type;
var G__19778 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19779 = loc;
var G__19780 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19776,G__19777,G__19778,G__19779,G__19780) : format.call(null,G__19776,G__19777,G__19778,G__19779,G__19780));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19781 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19782 = symbol;
var G__19783 = loc;
var G__19784 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19785_19893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19786_19894 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19787_19895 = true;
var _STAR_print_fn_STAR__temp_val__19788_19896 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19787_19895);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19788_19896);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19748_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19748_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19786_19894);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19785_19893);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19781,G__19782,G__19783,G__19784) : format.call(null,G__19781,G__19782,G__19783,G__19784));
} else {
var G__19789 = "Execution error%s at %s(%s).\n%s\n";
var G__19790 = cause_type;
var G__19791 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19792 = loc;
var G__19793 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19789,G__19790,G__19791,G__19792,G__19793) : format.call(null,G__19789,G__19790,G__19791,G__19792,G__19793));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19752__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
