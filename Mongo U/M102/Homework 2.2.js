db.products_bak.update(
	{_id: ObjectId("507d95d5719dbef170f15c00")}
	,{$set {term_years: 3, "limits.sms.over_rate":0.01}}
	)