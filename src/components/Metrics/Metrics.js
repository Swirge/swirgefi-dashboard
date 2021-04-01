import React from 'react';
import { useTranslation } from 'react-i18next';
import { Metrics } from './style';

import GlobalTvlMetric from './GlobalTvlMetric';
import TreasuryMetric from './TreasuryMetric';
import GenericMetric from './GenericMetric';

export default function NavBar() {
	const { t } = useTranslation();
	return (
		<Metrics>
			<GlobalTvlMetric link="https://finance.swirge.com/" />
			<GenericMetric
				name={t("Metric-ActiveVaults")}
				metric="vaultCount"
				link="https://finance.swirge.com/"
			/>
			<GenericMetric
				name={t("Metric-DailyRewards")}
				metric="dailyEarnings"
				link="https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c?a=0x9CBce88c77DA23d5DC5Ae18580b5f5AaBc3a9A73#tokenAnalytics"
			/>
			<GenericMetric
				name={t("Metric-TotalRewards")}
				metric="totalEarnings"
				link="https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c?a=0x9CBce88c77DA23d5DC5Ae18580b5f5AaBc3a9A73#tokenAnalytics"
			/>
			<GenericMetric
				name={t("Metric-BIFIStaked")}
				metric="stakedBifi"
				link="https://bscscan.com/token/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb?a=0x9CBce88c77DA23d5DC5Ae18580b5f5AaBc3a9A73#writeContract"
			/>
			<GenericMetric
				name={t("Metric-BIFIHolders")}
				metric="bifiHolders"
			/>
			<TreasuryMetric
				token="BIFI"
				link="https://bscscan.com/token/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb?a=0x8aa29f9146440886DDFC9C88136dEf7149192298"
				/>
			<TreasuryMetric
				token="WBNB"
				link="https://bscscan.com/token/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c?a=0x8aa29f9146440886DDFC9C88136dEf7149192298"
				/>
			<GenericMetric
				name={t("Metric-BIFIPrice")}
				metric="bifiPrice"
				link="https://streetswap.vip/#/swap?outputCurrency=0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb"
			/>
			<GenericMetric
				name={t("Metric-MarketCap")}
				metric="marketCap"
				link="https://streetswap.vip/#/swap?outputCurrency=0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb"
			/>
		</Metrics>
	);
}
