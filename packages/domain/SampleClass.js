SampleClass = Astro.Class.create({
    name: 'SampleClass',
    fields: {
        fieldSimpleString: {
            type: String
        },
        sampleChoiceType: {
            type: String,
            default: 'type1',

            validators: [{
                type: 'choice',
                param: [
                    'type1',
                    'type2',
                    'type3',
                    'type4'
                ]
            }]
        },
        seats: {
            type: Number,
            default: 0
        },

        // Uncomment this field to break client side validation for field 'sampleChoiceType'
        /*length: {
            type: Number,
            default: function() {
                return 0;
            }
        }*/
    }
});