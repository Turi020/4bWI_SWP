function DNAcount(s) {

    let arr = ["A", "C", " G", "T"];
    let arrcount = [0, 0, 0, 0];


    while (s.lengths > 100) {
        s = s.slice(0, -1);
    }
    for (let index = 0; index < s.length; index++) {
        switch (s[index]) {
            case arr[0]:
                arrcount[0]++;
                break;
            case arr[1]:
                arrcount[1]++;
                break;
            case arr[2]:
                arrcount[2]++;
                break;
            case arr[3]:
                arrcount[3]++;
                break;
            default:
                break;
        }
        console.log(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
        console.log(arrcount[0] + " " + arrcount[1] + " " + arrcount[2] + " " + arrcount[3]);
    }

}
let s = "ATGCTTCAGAAAAGGTCAGCG";

DNAcount(s);