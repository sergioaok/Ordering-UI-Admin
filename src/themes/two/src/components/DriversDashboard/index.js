import React, { useState } from 'react'
import { DriversList as DriversController } from 'ordering-components-admin'
import { DriversLocation } from '../DriversLocation'
import { DriversList } from '../DriversList'
import { DriversOnlineOfflineFilter } from '../DriversOnlineOfflineFilter'
import { DriversBusyStatusFilter } from '../DriversBusyStatusFilter'
import {
  DriversDashboardContainer,
  DriversContainer,
  FilterContainer,
  WrapperDriversList,
  WrapperDriversLocation
} from './styles'

export const DriversDashboardUI = (props) => {
  const {
    driversList,
    onlineDrivers,
    offlineDrivers,
    driversIsOnline,
    driversSubfilter,
    handleChangeDriverIsOnline,
    handleChangeDriversSubFilter
  } = props
  return (
    <DriversDashboardContainer>
      <DriversContainer>
        <FilterContainer>
          <DriversOnlineOfflineFilter
            driversIsOnline={driversIsOnline}
            handleChangeDriverIsOnline={handleChangeDriverIsOnline}
          />
          <DriversBusyStatusFilter
            driversSubfilter={driversSubfilter}
            handleChangeDriversSubFilter={handleChangeDriversSubFilter}
          />
        </FilterContainer>
        <WrapperDriversList id='driversList'>
          <DriversList
            loading={driversList.loading}
            driversIsOnline={driversIsOnline}
            onlineDrivers={onlineDrivers}
            offlineDrivers={offlineDrivers}
          />
        </WrapperDriversList>
      </DriversContainer>
      <WrapperDriversLocation>
        <DriversLocation
          driversList={driversList}
          driverAvailable='all'
          interActionMapOrder={null}
        />
      </WrapperDriversLocation>
    </DriversDashboardContainer>
  )
}

export const DriversDashboard = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriversDashboardUI,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
