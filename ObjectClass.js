const couple = {
    male: 'Parvej Ahammad',
    female: 'Jyothy Reddy Pala',
    whoProposed: function () {
        return this.female + ' proposed to ' + this.male;
    }
}

console.log(couple.whoProposed())