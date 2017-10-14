<?php

namespace XeroPHP\Models\Accounting;

class ReportTaxType {

    const AUSTRALIUM_OUTPUT          = 'OUTPUT';
    const AUSTRALIUM_INPUT           = 'INPUT';
    const AUSTRALIUM_EXEMPTOUTPUT    = 'EXEMPTOUTPUT';
    const AUSTRALIUM_INPUTTAXED      = 'INPUTTAXED';
    const AUSTRALIUM_BASEXCLUDED     = 'BASEXCLUDED';
    const AUSTRALIUM_EXEMPTEXPENSES  = 'EXEMPTEXPENSES';
    const AUSTRALIUM_EXEMPTCAPITAL   = 'EXEMPTCAPITAL';
    const AUSTRALIUM_EXEMPTEXPORT    = 'EXEMPTEXPORT';
    const AUSTRALIUM_CAPITALEXINPUT  = 'CAPITALEXINPUT';
    const AUSTRALIUM_GSTONCAPIMPORTS = 'GSTONCAPIMPORTS';
    const AUSTRALIUM_GSTONIMPORTS    = 'GSTONIMPORTS';

    const NEW_ZEALAND_OUTPUT       = 'OUTPUT';
    const NEW_ZEALAND_INPUT        = 'INPUT';
    const NEW_ZEALAND_EXEMPTOUTPUT = 'EXEMPTOUTPUT';
    const NEW_ZEALAND_EXEMPTINPUT  = 'EXEMPTINPUT';
    const NEW_ZEALAND_NONE         = 'NONE';
    const NEW_ZEALAND_GSTONIMPORTS = 'GSTONIMPORTS';

    const UK_OUTPUT               = 'OUTPUT';
    const UK_INPUT                = 'INPUT';
    const UK_EXEMPTOUTPUT         = 'EXEMPTOUTPUT';
    const UK_EXEMPTINPUT          = 'EXEMPTINPUT';
    const UK_ECOUTPUT             = 'ECOUTPUT';
    const UK_ECOUTPUTSERVICES     = 'ECOUTPUTSERVICES';
    const UK_ECINPUT              = 'ECINPUT';
    const UK_ECACQUISITIONS       = 'ECACQUISITIONS';
    const UK_CAPITALSALESOUTPUT   = 'CAPITALSALESOUTPUT';
    const UK_CAPITALEXPENSESINPUT = 'CAPITALEXPENSESINPUT';
    const UK_MOSSSALES            = 'MOSSSALES';
    const UK_REVERSECHARGES       = 'REVERSECHARGES';
    const UK_NONE                 = 'NONE';
    const UK_GSTONIMPORTS         = 'GSTONIMPORTS';


}