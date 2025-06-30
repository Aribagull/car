import React, { useState, useEffect } from "react";

export default function PendingApprovalModal({ isOpen, onClose, row, onUpdateStatus }) {
  const [showReasonBox, setShowReasonBox] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");



  useEffect(() => {
    if (!isOpen) {
      setShowReasonBox(false);
      setRejectionReason("");
    }
  }, [isOpen]);

  if (!isOpen || !row) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md border">

   
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Customer Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

    
        <div className="text-sm">
          <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b">
            <div>
              <p className="text-black">Location</p>
              <p className="text-gray-600">marketplace-b9f2f779</p>
            </div>
            <div>
              <p className="text-black">Customer ID</p>
              <p className="text-gray-600">000197381</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b">
            <div>
              <p className="text-black">Source</p>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                merchants:118271
              </span>
            </div>
            <div>
              <p className="text-black">Destination</p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                merchants:118271:payout
              </span>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="bg-gray-50 border text-gray-700 px-4 py-3 rounded flex items-start space-x-2">
              <span className="text-gray-400">ℹ️</span>
              <p>This posting was flagged because it matched the rule <strong>significant_payout</strong></p>
            </div>
          </div>
        </div>

       
        {showReasonBox && (
          <div className="px-6 py-4 bg-red-50">
            <label className="block text-sm font-medium text-red-800 mb-1">Reason for Rejection</label>
            <textarea
              rows={3}
              className="w-full border border-red-300 rounded px-3 py-2 text-sm text-red-900 placeholder-red-400 focus:outline-none focus:ring-1 focus:ring-red-400 resize-none"
              placeholder="Enter reason here..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
          </div>
        )}

       
        <div className="flex justify-between items-center px-6 py-4">
          <button
            onClick={() => {
              if (!showReasonBox) {
                setShowReasonBox(true);
                return;
              }
              onUpdateStatus(row.id, "Rejected", rejectionReason);
            }}
            className="px-4 py-2 border rounded hover:bg-gray-100 text-gray-700"
          >
            Reject
          </button>
          <button
            onClick={() => onUpdateStatus(row.id, "Accepted")}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Approve ✓
          </button>
        </div>
      </div>
    </div>
  );
}
