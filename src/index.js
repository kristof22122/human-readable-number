module.exports = function toReadable (number) {
       let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
      let words2 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
      if (number < 20){
        return `${words[number]}`
      } else if(number < 100){
            let d = Math.trunc(number / 10)
            let od = number % 10
            if (od == 0){
                return `${words2[d]}`
                } else {
                return `${words2[d]} ${words[od]}`
                } 
            } else {
                    let od = number % 10
                    let d = (Math.trunc(number / 10)) % 10
                    let s = Math.trunc(number / 100)
                    if ((od == 0) && (d == 0)){
                        return `${words[s]} hundred`
                    } else if (d == 0){
                        return `${words[s]} hundred ${words[od]}`
                    } else if((d == 1) && (od == 0)){
                        return `${words[s]} hundred ten`
                    } else if((d == 1)){
                        return `${words[s]} hundred ${words[od + 10]}`
                    } else if((od == 0)){
                        return `${words[s]} hundred ${words2[d]}`
                    } else {
                        return `${words[s]} hundred ${words2[d]} ${words[od]}`
                    }
                    }
                }
        
