const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Наталия",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Екатерина",
            "id_6": "Ярослава",
            "id_7": "Светлана",
            "id_8": "Анастасия",
            "id_9": "Валентина",
            "id_10": "Елена"
        }
    }`,

    professionMaleJson: `{
        "count": 7,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Инженер",
            "id_3": "Строитель",
            "id_4": "Водитель",
            "id_5": "Военный",
            "id_6": "Автомеханик",
            "id_7": "Программист"
        }
    }`,

    professionFeMaleJson: `{
        "count": 7,
        "list": {
            "id_1": "Доктор",
            "id_2": "Манекенщица",
            "id_3": "Учитель",
            "id_4": "Домохозяйка",
            "id_5": "Бухгалтер",
            "id_6": "Менеджер",
            "id_7": "Продавец"
        }
    }`,

    middleNameMaleJson: `{
        "count": 7,
        "list": {
            "id_1": "Александрович",
            "id_2": "Петрович",
            "id_3": "Владимирович",
            "id_4": "Дмитриевич",
            "id_5": "Анатольевич",
            "id_6": "Константинович",
            "id_7": "Сергеевич"
        }
    }`,

    middleNameFeMaleJson: `{
        "count": 7,
        "list": {
            "id_1": "Александровна",
            "id_2": "Петровна",
            "id_3": "Владимировна",
            "id_4": "Дмитриевна",
            "id_5": "Анатольевна",
            "id_6": "Константиновна",
            "id_7": "Сергеевна"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstNameMale: function() {

        return this.randomValue(this.firstNameMaleJson);
    },

    randomMiddleNameMale: function() {
        return this.randomValue(this.middleNameMaleJson);
    },

    randomProfessionMale: function() {
        return this.randomValue(this.professionMaleJson);
    },

    randomFirstNameFeMale: function() {
        return this.randomValue(this.firstNameFemaleJson);
    },

    randomMiddleNameFemale: function() {
        return this.randomValue(this.middleNameFeMaleJson);
    },

    randomProfessionFeMale: function() {
        return this.randomValue(this.professionFeMaleJson);
    },


    randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },

    randomGender: function() {
        return (this.randomIntNumber(1, 0) === 0) ? this.GENDER_FEMALE : this.GENDER_MALE
    },

    randomBirthDate: function(min, max) {
        if (min instanceof Date) {
            min = min.getTime();
        }
    
        if (max instanceof Date) {
            max = max.getTime();
        }
    
        const r = this.randomIntNumber(max, min);
    
        return new Date(r)
    },
    

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
            if (this.person.gender == this.GENDER_FEMALE) {
                this.person.surname += 'а';
                this.person.firstName = this.randomFirstNameFeMale();
                this.person.profession = this.randomProfessionFeMale();
                this.person.middleName = this.randomMiddleNameFemale();
            } else {
                this.person.firstName = this.randomFirstNameMale();
                this.person.profession = this.randomProfessionMale();
                this.person.middleName = this.randomMiddleNameMale();
            }
        var now = new Date();
        this.person.birthday = this.randomBirthDate(
            new Date(now.getFullYear() - 70, now.getMonth(), now.getDate()),
            new Date(now.getFullYear() - 18, now.getMonth(), now.getDate())
        );
                    
        
        return this.person;
    }
};
