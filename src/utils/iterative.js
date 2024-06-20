function interK(Q,M,S,r){
    console.log(Q,M,S,r)
    let K = 0.5
    let A = Q*Math.log(10*S/r)/(2*Math.PI*S*M)
    let B = Q/(4*Math.PI*S*M)
    let n = 0

    function f(K){
        return A + B * Math.log(K)
    }

    while(Math.abs(f(K) - K) > 0.01){
        n++
        K = f(K)
    }
    console.log(A,B,n)
    return K
    
}
export default interK