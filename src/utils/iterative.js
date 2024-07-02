function interK(Q,M,S,r){
    const inter = []
    let K = 0.5
    let A = Q*Math.log(10*S/r)/(2*Math.PI*S*M)
    let B = Q/(4*Math.PI*S*M)
    let n = 0

    function f(K){
        return A + B * Math.log(K)
    }
    inter.push({
        n: n,
        K: K,
    })
    while(Math.abs(f(K) - K) > 0.00001){
        console.log(Math.abs(f(K) - K))
        n++
        K = f(K)
        inter.push({
            n: n,
            K: K,
        })
    }
    
    return {K, inter}
    
}
export function kong1K(Sw, S, Q, M, rw, r) {
    return Q/(2*Math.PI*M*(Sw-S))*Math.log(r/rw)
    
}
export function kong2K(S2, S1, Q, M, r2, r1) {
    return Q/(2*Math.PI*M*(S1-S2))*Math.log(r2/r1)
    
}
export default interK