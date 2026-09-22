class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let carMap = position.map((p, i) => [p, speed[i]])
        carMap = carMap.sort((a, b) => b[0] - a[0]);

        const carFleets: number[] = [];
        for (let i = 0; i < carMap.length; i++) {
            const [p, s] = carMap[i]; 
            const ttr = (target - p) / s;
            if (ttr <= carFleets[carFleets.length -1]) continue;
            carFleets.push(ttr);
        }

        return carFleets.length;
    }
}
