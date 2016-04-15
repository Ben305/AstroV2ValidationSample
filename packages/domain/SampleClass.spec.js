describe('SampleClass', function() {

    var sampleClass;

    beforeEach(function() {
        sampleClass = new SampleClass();
    });

    describe(' test default values', function() {

        describe(' default value for sampleChoiceType', function() {

            it('it should have the default value type1', function() {
                assert.equal(sampleClass.sampleChoiceType, 'type1');
            })

       });
    });

    describe(' test the validators', function() {

        describe(' validators for sampleChoiceType', function() {

            it('should be valid for type1', function() {
                sampleClass.sampleChoiceType = 'type1';
                sampleClass.validate({fields: 'sampleChoiceType'});
            });

            it('should be valid for type2', function() {
                sampleClass.sampleChoiceType = 'type2';
                sampleClass.validate({fields: 'sampleChoiceType'});
            });

            it('should be invalid for typeX', function() {
                sampleClass.sampleChoiceType = 'typeX';
                assert.throws(function() {
                    sampleClass.validate({fields: 'sampleChoiceType'});
                });
            })
        })
    });
});