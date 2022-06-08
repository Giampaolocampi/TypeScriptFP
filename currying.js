var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var addFollower = function (follower) { return function (user) { return (__assign(__assign({}, user), { followers: __spreadArray(__spreadArray([], user.followers, true), [follower], false) })); }; };
// -------------------
// esempio di utilizzo
// -------------------
var user = { id: 1, name: 'Ruth R. Gonzalez', followers: [] };
var follower = { id: 3, name: 'Marsha J. Joslyn', followers: [] };
console.log(addFollower(follower)(user));
